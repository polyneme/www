import csv
import json
import re
from typing import List


def process_row(row: List[str], store: dict):
    header_prefix = {
        'Organization, Management & Governance': 'omg',
        'Strategic Intent 1': 'si1',
        'Strategic Intent 2': 'si2',
        'Product Initiative: Submission': 'pisp',
        'Product Initiative: Data': 'pidp',
        'Product Initiative: NMDC Edge': 'pie',
    }
    label, description, *rest = row
    label, description = label.strip(), description.strip()
    for text, code in header_prefix.items():
        if label.startswith(text):
            store["_next_type"] = code

    if re.fullmatch(r"\d+\.\d+", label):
        store[(store["_next_type"] + label)] = description


if __name__ == "__main__":

    store = {}
    namespace = "https://www.polyneme.xyz/2023/nmdc/milestone/"

    with open("roadmap_FY23-25.tsv") as file_in:
        reader = csv.reader(file_in, delimiter='\t')
        for row in reader:
            process_row(row, store)

    for k, v in store.items():
        if k.startswith("_"):
            continue

        with open(k, "w") as file_out:
            json.dump({
                "@context": "http://www.w3.org/2013/json-ld-context/rdfa11",
                "@id": namespace + k,
                "skos:prefLabel": v,
            }, file_out, indent=2)



