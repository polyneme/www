/** @jsx jsx */
import { jsx } from "theme-ui"

const GridItem = ({ children }) => (
  <div sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
    {children}
  </div>
)

export default props => (
  <footer
    sx={{
      fontSize: 1,
      variant: "styles.footer",
    }}
  >
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr));",
        //gridGap: "0.5rem",
        gap: "50px",
        justifyItems: "center",
        alignItems: "start",
        justifyContent: "space-around",
        //px: 2,
        mx: "5em",
        pt: 4,
        pb: 1,
      }}
    >
      <GridItem>
        <h4 sx={{ mb: 0 }}>U.S. Federal Contract Info</h4>
        <p>
          D‑U‑N‑S Number: 017109707
          <br />
          CAGE Code: 8RE81
          <br />
          NAICS Code: 541512
          <br />
        </p>
      </GridItem>
      <GridItem>
        <h4 sx={{ mb: 0 }}>Contact Us</h4>
        <p>
          82 Nassau St # 60280 <br />
          New York, NY 10038 <br />
          <a
            href="mailto:info@polyneme.xyz"
            sx={{ variant: "styles.navlink", pt: 2 }}
          >
            info@polyneme.xyz
          </a>
        </p>
      </GridItem>
    </div>
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 3,
      }}
    >
      © {new Date().getFullYear()} Polyneme LLC
    </div>
  </footer>
)
