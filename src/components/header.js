/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import logo from "../images/polyneme-logo-darkbg.png"

export default props => (
  <header
    sx={{
      py: 4,
      variant: "styles.header",
    }}
  >
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <Link to="/" title="Home">
        <img
          sx={{
            width: "100%",
            maxWidth: "logo",
          }}
          alt="Polyneme LLC Logo"
          src={logo}
        />
        <span
          sx={{
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            top: -9999,
          }}
        >
          Home
        </span>
      </Link>
    </div>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Home
      </Link>
      <Link
        to="/services"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Services
      </Link>
      <Link
        to="/testimonials"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Hearsay
      </Link>
      <Link
        to="/about"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        About
      </Link>
      {/*
      <a
        href="#contact"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Contact
      </a>
      */}
    </div>
  </header>
)
