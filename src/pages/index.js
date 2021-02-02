import React from "react"

import Layout from "../components/layout"
import { Heading, Box, Button, Container, Grid } from "theme-ui"

const QBox = ({ children }) => (
  <Box
    sx={{
      maxWidth: "65%",
      mx: "auto",
      bg: "muted",
      padding: "10px",
      borderRadius: "10px",
    }}
  >
    {children}
  </Box>
)

const IndexPage = () => (
  <Layout>
    <Heading
      sx={{
        maxWidth: "512px",
        width: "90%",
        mx: "auto",
      }}
    >
      Trouble with scientific data collaboration?
    </Heading>
    <Box
      sx={{
        py: 4,
        mx: "auto",
        maxWidth: "65%",
      }}
    >
      At Polyneme LLC, we amplify the capacity of researchers to perform
      data-intensive science together.
    </Box>
    <Container sx={{ width: 300, mx: "auto" }}>
      <a href="https://meet.polyneme.xyz/15-min-free">
        <Button>Book a Free 15-minute Consultation</Button>
      </a>
    </Container>
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
      <Container sx={{ width: 300, mx: "auto" }}>
        <a href="https://meet.polyneme.xyz/15-min-free">
          <Button>Book a Free 15-minute Consultation</Button>
        </a>
      </Container>
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
      <Container sx={{ width: 300, mx: "auto" }}>
        <a href="https://meet.polyneme.xyz/15-min-free">
          <Button>Book a Free 15-minute Consultation</Button>
        </a>
      </Container>
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
      <Container sx={{ width: 300, mx: "auto" }}>
        <a href="https://meet.polyneme.xyz/15-min-free">
          <Button>Book a Free 15-minute Consultation</Button>
        </a>
      </Container>
    </Grid>
  </Layout>
)

export default IndexPage
