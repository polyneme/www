/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container } from "theme-ui"
import Header from "../components/header"
import Footer from "../components/footer"

export default props => (
  <div
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      variant: "layout.root",
      maxWidth: "40em",
      margin: "0 auto",
      lineHeight: "2",
      fontSize: "1.1em",
      fontFamily: '"Merriweather", serif',
    }}
  >
    <header
      sx={{
        maxWidth: "40em",
        margin: "0 auto",
        variant: "layout.header",
      }}
    >
      <Container>
        <Header />
      </Container>
    </header>
    <main
      sx={{
        maxWidth: "40em",
        margin: "0 auto",
        flex: "1 1 auto",
        variant: "layout.main",
      }}
    >
      <Container>{props.children}</Container>
    </main>
    <footer
      sx={{
        maxWidth: "40em",
        margin: "0 auto",
        variant: "layout.footer",
      }}
    >
      <Container>
        <Footer />
      </Container>
    </footer>
  </div>
)
