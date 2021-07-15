/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BookConsultation from "../components/book"

//const P = ({ children }) => <p sx={{ maxWidth: "640px" }}>{children}</p>

const Li = ({ children }) => <li sx={{ px: "40px", my: "2em" }}>{children}</li>

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container sx={{ display: "grid", justifyItems: "center", rowGap: "2em" }}>
      <div>
        <h2 sx={{ mb: 0, ml: "1em" }}> Typical client outcomes</h2>
        <ul sx={{ pl: 0, mt: 0, listStyle: "inside" }}>
          <Li>Integration of heterogeneous data sets and capabilities.</Li>
          <Li>
            Improved public (or cross-team) discoverability of published data.
          </Li>

          <Li>Appropriate interfaces for domain specialists.</Li>

          <Li>Trust in data, with provenance made visible.</Li>

          <Li>Granular control of data-plus-interface access.</Li>

          <Li>
            Amplified utility of data via interactive, browser-based tools.
          </Li>

          <Li>
            Automated credentialing that expands capacity for data
            collaboration.
          </Li>

          <Li>
            Trained and empowered staff, collaborators, and user communities.
          </Li>
        </ul>
        <Link to="/publications" sx={{ color: "text", ml: "1em" }}>
          Publications
        </Link>
      </div>

      <BookConsultation />
    </Container>
  </Layout>
)

export default ServicesPage
