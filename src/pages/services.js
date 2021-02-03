/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BookConsultation from "../components/book"

//const P = ({ children }) => <p sx={{ maxWidth: "640px" }}>{children}</p>

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Container sx={{ display: "grid", justifyItems: "center", rowGap: "2em" }}>
      <div>
        <h2 sx={{ mb: 0, ml: "1em" }}> Typical client outcomes</h2>
        <ul sx={{ lineHeight: "3em", mt: 0 }}>
          <li>Integration of heterogeneous data sets and capabilities.</li>
          <li>
            Improved public (or cross-team) discoverability of published data.
          </li>

          <li>Appropriate interfaces for domain specialists.</li>

          <li>Trust in data, with provenance made visible.</li>

          <li>Granular control of data-plus-interface access.</li>

          <li>
            Amplified utility of data via interactive, browser-based tools.
          </li>

          <li>
            Automated credentialing that expands capacity for data
            collaboration.
          </li>

          <li>
            Trained and empowered staff, collaborators, and user communities.
          </li>
        </ul>
      </div>

      <BookConsultation />
    </Container>
  </Layout>
)

export default ServicesPage
