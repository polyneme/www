/** @jsx jsx */
import { jsx, Container, Box, Heading } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BookConsultation from "../components/book"
import React from "react"

//const P = ({ children }) => <p sx={{ maxWidth: "640px" }}>{children}</p>

const Li = ({ children }) => <li sx={{ px: "40px", my: "2em" }}>{children}</li>

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

const CenteredHeading = ({ children }) => (
  <Heading
    sx={{
      maxWidth: "512px",
      width: "90%",
      mx: "auto",
      textAlign: "center",
      fontSize: "1.1em",
    }}
  >
    {children}
  </Heading>
)

const OfferingsPage = () => (
  <Layout>
    <SEO title="Offerings" />
    <Container sx={{ display: "grid", justifyItems: "center", rowGap: "2em" }}>
      <div>
        <QBox>
          Do you dread having to “make it FAIR” when publishing research data?
        </QBox>
        <QBox>
          What if your research was continuously and ubiquitously FAIR?
        </QBox>
        <QBox>
          <em>For you — after all, FAIR doesn’t mean Open.</em>
        </QBox>
        <QBox>
          What if all digital objects in your research lifecycle — analyses,
          data, documentation, metadata, models, workflows — were
          publication-quality?
        </QBox>
        <QBox>
          <em>Because you’d always be publishing, just not always openly.</em>
        </QBox>
        <QBox>
         I help small research labs design continuous and ubiquitous FAIR data infrastructure by holistically decomposing the data lifecycle so that impediments to machine-actionability are isolated and made soluble.
        </QBox>

        <p sx={{ my: "2em" }}></p>
        <CenteredHeading>Strategy Call — $1,000 (Hydrogen)</CenteredHeading>
        <QBox>
          Get clarity on aspects of FAIR that are blocking your implementation
          progress so that you can de-risk your approach. Up to 90 minutes. I
          deliver a written summary of follow-up recommendations within three
          business days.
        </QBox>
        <CenteredHeading>
          FIP Inventory + Roadmap — $3,000 (Lithium)
        </CenteredHeading>
        <QBox>
          Get an unambiguous plan of action you can hand off to software
          developers and data engineers. We have two calls. I deliver a
          human-readable and machine-actionable FAIR Implementation Profile
          (FIP), using the FIP ontology, within five business days.
        </QBox>
        <CenteredHeading>
          Dataset FAIRification PoC — $11,000 (Sodium)
        </CenteredHeading>
        <QBox>
          Treat your favorite dataset, or make good on a Data Management Plan
          (DMP) claim. I give you specifics to apply your FAIR Implementation
          Profile (FIP) — clarifying and sequencing the steps to materialize and
          deploy resources — to your particular dataset, plus Proof of Concept
          (PoC) code to get you started. Done over two weeks.
        </QBox>
        <CenteredHeading>
          Infrastructure Roadmap — $19,000 (Potassium)
        </CenteredHeading>
        <QBox>
          Get clear on your adoption/implementation and integration of
          FAIR-enabling resources — identifier services, metadata schemas,
          registries, preservation policies, controlled-vocabulary stewardship,
          usage licenses, etc. — throughout your projects' research lifecycles.
          I design and deliver a roadmap to continuous and ubiquitous FAIR data
          infrastructure for your lab. Assumes we can schedule two 90-minute
          recorded workshops with all lab members present at both. Done over two
          months.
        </QBox>
        <CenteredHeading>DMP Rescue — $37,000 (Rubidium)</CenteredHeading>
        <QBox>
          Worry less. Three months of oversight for FAIR Data Management Plan
          (DMP) fulfillment, aka "DMP Rescue". I will proactively help ensure
          your DMP is fulfilled. I check in on communication channels and
          bug/issue trackers. Oversight service may include delivery of
          task-relevant training workshops. However, I am not managing any
          project activity. Renewable.
        </QBox>
        <CenteredHeading>
          Infra Roadmap + PoC — $55,000 (Cesium)
        </CenteredHeading>
        <QBox>
          When you want a concrete basis for iteration. The Infrastructure
          Roadmap service, plus a Proof of Concept (PoC) system implementation
          to get you started. Done over two + two = four months total.
        </QBox>
        <CenteredHeading>
          Infra Roadmap + PoC + Oversight — $87,000 (Francium)
        </CenteredHeading>
        <QBox>
          When you need proactive surveying of ground truth to be confident the
          plan is being honored. The Infrastructure Roadmap service, plus a
          Proof of Concept (PoC) system implementation to get you started, plus
          three months of oversight.
        </QBox>
      </div>

      <BookConsultation />
    </Container>
  </Layout>
)

export default OfferingsPage
