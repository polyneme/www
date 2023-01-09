import csv
import json
import re
from typing import List

PATH_PREFIX = "https://www.polyneme.xyz/2023/nmdc/milestone/"

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
            store["@graph"].append({
                "@id": PATH_PREFIX + store["_next_type"],
                "skos:prefLabel": label,
            })

    if re.fullmatch(r"\d+\.\d+", label):
        store["@graph"].append({
            "@id": PATH_PREFIX + 'm' + label,
            "skos:prefLabel": description,
            "skos:broader": PATH_PREFIX + store["_next_type"]
        })


if __name__ == "__main__":

    store = {
        "@context": "http://www.w3.org/2013/json-ld-context/rdfa11",
        "@graph": [],
    }

    with open("roadmap_FY23-25.tsv") as file_in:
        reader = csv.reader(file_in, delimiter='\t')
        for row in reader:
            process_row(row, store)

    for doc in store["@graph"]:
        local_name = doc["@id"].split("/")[-1]
        with open(local_name, "w") as file_out:
            doc |= {"@context": store["@context"]}
            doc_as_str = json.dumps(doc, indent=2)
            doc_as_html = re.sub(
                r'"(https?://[^\"]+)"',
                r'<a href="\1">\1</a>',
                doc_as_str,
            )
            body = f"""\
<!doctype html>
<html lang="en">
<head>
<title>{doc["skos:prefLabel"]}</title>
<meta charset="UTF-8">
<script type="application/ld+json">
{doc_as_str}
</script>
</head>
<body>
<pre>
{doc_as_html}
</pre>
</body>
</html>
            """
            file_out.write(body)




