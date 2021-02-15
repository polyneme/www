/** @jsx jsx */
import { jsx, Input, Container } from "theme-ui"

import { useMachine } from "@xstate/react"
import { Machine, assign } from "xstate"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

import gold_paths from "../json/gold-paths.json"

const gold_paths_lcased = gold_paths.map(({ id, path }) => {
  return { id, path: path.map(w => w.toLowerCase()) }
})

const gold_paths_by_id = gold_paths.reduce((accu, next) => {
  return _.assign(accu, { [next.id]: next.path })
}, {})

const sum = (accu, next) => accu + next
const max = (accu, next) => Math.max(accu, next)

const search = s => {
  if (s === "") {
    return gold_paths_lcased.map(({ id }) => ({ id, score: 0 }))
  }
  const words = s.split(/\s+/).map(w => w.toLowerCase())
  const regexps = words.map(w => new RegExp(w))
  return gold_paths_lcased.map(({ id, path }) => {
    // weight by # of words that test positive
    return {
      id,
      score: regexps
        .map(r => {
          return path
            .map(p => {
              return r.test(p) ? 1 : 0
            })
            .reduce(max, 0)
        })
        .reduce(sum),
    }
  })
}

const goldTermMachine = Machine(
  {
    initial: "search",
    context: {
      scores: gold_paths_lcased.map(({ id }) => ({ id, score: 0 })),
      s: "",
    },
    states: {
      search: {
        on: {
          KEYPRESS: {
            actions: [
              assign({
                scores: (ctx, evt) => search(evt.data.s),
                s: (ctx, evt) => evt.data.s,
              }),
              "logInput",
              "logScores",
            ],
          },
        },
      },
    },
  },
  {
    actions: {
      logInput: (ctx, evt) => {
        //console.log(evt.data.s)
      },
      logScores: ctx => {
        //console.log(_.sortBy(ctx.scores, [p => -p.score]))
      },
    },
  }
)

const GOLDEcosystemPathsPage = () => {
  const [state, send] = useMachine(goldTermMachine)

  return (
    <Layout>
      <SEO title="GOLD Ecosystem Classification Paths" />
      <Container sx={{ display: "grid", justifyItems: "center" }}>
        <h1 sx={{ mt: 0 }}>GOLD Ecosystem Classification Paths</h1>
        <span sx={{ mb: "2em" }}>
          Based on{" "}
          <a sx={{ color: "text" }} href="https://gold.jgi.doe.gov/downloads">
            JGI's file
          </a>
          . Go{" "}
          <a
            sx={{ color: "text" }}
            href="https://gold.jgi.doe.gov/ecosystemtree"
          >
            here
          </a>{" "}
          for interactive navigation of the tree.
        </span>
      </Container>
      <Input
        onChange={e => send({ type: "KEYPRESS", data: { s: e.target.value } })}
        value={state.context.s}
        type="search"
        placeholder="Search"
        sx={{ mb: "2em" }}
      />
      <ul>
        {_.sortBy(state.context.scores, [p => -p.score]).map(
          ({ id, score }) => {
            return (
              <li
                sx={{
                  color: `${score === 0 ? "gray" : "text"}`,
                }}
                key={id}
              >
                {_.join(gold_paths_by_id[id], " / ")}
              </li>
            )
          }
        )}
      </ul>
      {/* <ul>
        {gold_paths.map(({ id, path }) => {
          return <li key={id}>{path}</li>
        })}
      </ul>
    */}
    </Layout>
  )
}

export default GOLDEcosystemPathsPage
