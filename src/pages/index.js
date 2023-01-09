import React from "react"

import Layout from "../components/layout"
import { Heading, Box, Grid, jsx } from "theme-ui"
import SEO from "../components/seo"

import BookConsultation from "../components/book"

const QBox = ({ children }) => (
  <Box
    sx={{
      //bg: "muted",
      padding: "10px",
      borderRadius: "10px",
    }}
  >
    {children}
  </Box>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading
      sx={{
        textAlign: "center",
      }}
    >
      Trouble with data collaboration?
    </Heading>
    <Box
      sx={{
        py: 4,
        textAlign: "center",
      }}
    >
      We help researchers do data-intensive science together.
    </Box>
    <BookConsultation />
    <Grid
      sx={{
        mt: 4,
        rowGap: 4,
      }}
    >
      <QBox>
        Your collaborators have their own world. They were already doing their
        work before you engaged them. They have their own tools, their own
        environments. If you're planning to force someone to use something else,
        are they actually going to use it?
      </QBox>
      <QBox>
        Your platform could be beautiful with lots of capabilities, but if it's
        not easy for them to use and to get into, they're only going to{" "}
        <em>publish</em> into it, they're not going to <em>work</em> in it.
      </QBox>
      <QBox>
        It could be fine for them to keep using their preferred workflow, but is
        the information going to flow? Will you get rapid support and
        enablement, or do you wait weeks to get access? Can you automate pulling
        the information down from their system into your system?
      </QBox>
      <BookConsultation />
      <QBox>
        You have sensitive unpublished work outside this collaboration. What are
        your security controls? How do you segregate information? Can you
        segregate functional-level controls and not just data-level controls?
        Are there different levels of users?
      </QBox>
      <QBox>
        About your collaborator's environment: does the architecture of this
        other thing fit into how you work, or how you want to work?
      </QBox>
      <QBox>
        Do you have the basic operating model between the collaboration teams on
        both sides so that you can actually make the work happen and the data
        flow?
      </QBox>
      <BookConsultation />
      <QBox>
        Every collaboration ends. When all is said and done, how do you get the
        information back out again? What's your back-out or decommissioning
        strategy?
      </QBox>
      <QBox>
        You're promoting FAIR where you are - making data findable, accessible,
        interoperable, and reusable. But the people that generated the data
        don't even know that someone will want that data downstream, so they're
        not going to anticipate those needs. How can you get the value of FAIR
        and enrich the workflows of individuals with smart tools so that they
        see the value, too?
      </QBox>
      <BookConsultation />
    </Grid>
  </Layout>
)

export default IndexPage

export const Head = () => (
  <>
    <link
      rel="stylesheet"
      type="text/css"
      href="//fonts.googleapis.com/css?family=Oswald:400|Merriweather:400,700"
    />
    <link rel="me" href="https://fairpoints.social/@donny" />
  </>
)
