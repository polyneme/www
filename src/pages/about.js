/** @jsx jsx */
import { Container, Image, jsx } from "theme-ui"

import Layout from "../components/layout"
//import { Heading, Box, Button, Container, Grid } from "theme-ui"
import SEO from "../components/seo"
import BookConsultation from "../components/book"

import photo_donny from "../images/donny.png"

const P = ({ children }) => (
  <p sx={{ px: "20px", maxWidth: "640px" }}>{children}</p>
)

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Container sx={{ display: "grid", justifyItems: "center" }}>
      <P>
        Polyneme LLC is a software and data consulting firm based in New York
        City. We seek to serve scientific researchers -- in academic,
        government, or industrial R&D environments. We focus on data sharing and
        collaboration, on helping researchers to benefit from each other's data
        and to finish data-intensive projects together.
      </P>
      <Image
        sx={{
          mt: "2em",
          width: "300px",
          mx: "auto",
        }}
        src={photo_donny}
        variant="about"
        alt="Donny Winston"
      />
      <span sx={{ mt: "6px", mb: "2em" }}>Donny Winston, President</span>

      <P>
        Our principal consultant and president is Dr. Donald Winston. Donny has
        a bachelor's degree from the University of California at Berkeley, and
        master's and Ph.D. degrees from the Massachusetts Institute of
        Technology, all in Electrical Engineering and Computer Science. His
        doctoral area of specialization was nanofabrication, with both
        experimental and computational work.
      </P>
      <P>
        Donny has worked in a research capacity at IBM Research in Yorktown
        Heights, NY; at the National Institute for Standards and Technology
        (NIST) in Gaithersburg, MD; at Carl Zeiss R&D in Peabody, MA; at
        Hewlett-Packard Labs in Palo Alto, CA; and at Lawrence Berkeley National
        Laboratory (LBNL) in Berkeley, CA.
      </P>
      <P>
        His expertise has evolved from hands-on experimental work in
        nanofabrication and metrology to developing databases, APIs, web apps,
        and other systems to help scientists make sense of large datasets and to
        dramatically enhance collaboration and the impact of their findings.
        Before starting Polyneme LLC, he was the principal web developer
        (full-stack) and data/systems engineer for the{" "}
        <a sx={{ color: "text" }} href="https://materialsproject.org/">
          Materials Project
        </a>
        , an academic/government effort to aid data-driven discovery of
        energy-related materials.
      </P>
      <P>
        Outside Polyneme LLC, Donny is a workshop instructor for{" "}
        <a sx={{ color: "text" }} href="https://carpentries.org/">
          The Carpentries
        </a>
        , helping to teach foundational coding and data science skills to
        researchers worldwide. He is also an active alum of{" "}
        <a sx={{ color: "text" }} href="https://www.recurse.com/">
          The Recurse Center
        </a>
        , a self-directed, community-driven educational retreat for programmers
        based in New York City. He would be delighted to tell you more about
        these organizations -- email{" "}
        <a sx={{ color: "text" }} href="mailto:donny@polyneme.xyz">
          donny@polyneme.xyz
        </a>
        .
      </P>
      <div sx={{ mt: "2em" }}>
        <BookConsultation />
      </div>
    </Container>
  </Layout>
)

export default AboutPage
