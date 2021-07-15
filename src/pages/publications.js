/** @jsx jsx */
import { jsx, Container } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BookConsultation from "../components/book"

//const P = ({ children }) => <p sx={{ maxWidth: "640px" }}>{children}</p>

const Li = ({ children }) => <li sx={{ px: "40px", my: "2em" }}>{children}</li>

const P = ({ children }) => (
  <p sx={{ px: "20px", maxWidth: "640px" }}>{children}</p>
)

const PublicationsPage = () => (
  <Layout>
    <SEO title="Publications" />
    <Container sx={{ display: "grid", justifyItems: "center", rowGap: "2em" }}>
      <h2 sx={{ mb: 0, ml: "1em" }}> Publications</h2>
      <div>
        <P>Publications co-authored by D. Winston may be found via</P>
        <ul sx={{ pl: 0, mt: 0, listStyle: "inside" }}>
          <Li>
            <a
              sx={{ color: "text" }}
              href="https://scholar.google.com/citations?user=ntsw0HgAAAAJ"
            >
              Google Scholar
            </a>
          </Li>
          <Li>
            <a
              sx={{ color: "text" }}
              href="https://perssongroup.lbl.gov/publications.html"
            >
              Persson Group @ LBL : Publications
            </a>
          </Li>

          <Li>
            <a
              sx={{ color: "text" }}
              href="https://www.rle.mit.edu/qnn/publications/"
            >
              Quantum Nanostructures and Nanofabrication Group @ MIT :
              Publications
            </a>
          </Li>
        </ul>
      </div>
      <P>
        This page will be updated periodically to highlight publications from
        selected client engagements.
      </P>
      <BookConsultation />
    </Container>
  </Layout>
)

export default PublicationsPage
