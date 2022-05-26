/** @jsx jsx */
import { Message, jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BookConsultation from "../components/book"

//const P = ({ children }) => <p sx={{ maxWidth: "640px" }}>{children}</p>

const TestimonialsPage = () => (
  <Layout>
    <SEO title="Testimonials" />
    <Container sx={{ display: "grid", justifyItems: "center", rowGap: "2em" }}>
      <Message>
        “The Project grew from a few thousand users to over 100,000 with an
        onslaught of data requests and increased demand. Without Donny’s
        commitment, knowledge and team working skills, we could not have grown
        to this size and gained international recognition.”
        <br />—{" "}
        <em>
          Kristin Persson, Director @{" "}
          <a sx={{ color: "text" }} href="https://materialsproject.org/">
            Materials Project
          </a>
        </em>
      </Message>
      <Message>
        “Donny brought an effective, solution-focused attitude to problem
        solving, striking a smart balance between pragmatic coding to get us
        results today while also planning long-term architectural choices for
        tomorrow.”
        <br />— <em>Matthew Horton, Lawrence Berkeley National Lab</em>
      </Message>
      <Message>
        “Donny Winston is among the most effective individuals I’ve worked with
        in my experience working in academia, government, and industry. He is
        diligent, personable, and has a knack for the kind of strategic thinking
        that will enable anyone working with him to achieve their goals with
        just the right level of resources.”
        <br />— <em>Industrial Research Scientist</em>
      </Message>
      <Message>
        “Donny is one of the most effective communicators I know. He made sure
        the team understood why and how his solutions were efficient and
        forward-looking, providing confidence in our progress.”
        <br />— <em>Materials Research Scientist</em>
      </Message>
      <Message>
        “I approached Donny to find a solution for a centralized system managing
        database credentials for our group. He delivered a well-rounded
        open-source python package including the necessary infrastructure which
        has ever since saved us valuable time on a daily basis. Particularly
        outstanding was his patience to discuss difficult technical details
        until we found a common denominator.”
        <br />—{" "}
        <em>Computer Systems Engineer embedded in scientific research group</em>
      </Message>
      <BookConsultation />
    </Container>
  </Layout>
)

export default TestimonialsPage
