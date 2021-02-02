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
    }}
  >
    <header
      sx={{
        width: "100%",
        variant: "layout.header",
      }}
    >
      <Container>
        <Header />
      </Container>
    </header>
    <main
      sx={{
        width: "100%",
        flex: "1 1 auto",
        variant: "layout.main",
      }}
    >
      <Container>{props.children}</Container>
    </main>
    <footer
      sx={{
        width: "100%",
        variant: "layout.footer",
      }}
    >
      <Container>
        <Footer />
      </Container>
    </footer>
  </div>
)
