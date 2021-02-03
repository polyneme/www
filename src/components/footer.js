/** @jsx jsx */
import { jsx } from "theme-ui"

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
        gridTemplateColumns: "repeat(2, 200px);",
        //gridGap: "0.5rem",
        justifyItems: "center",
        alignItems: "start",
        justifyContent: "space-around",
        px: 2,
        pt: 4,
        pb: 1,
      }}
    >
      <div>
        <h4>U.S. Federal Contract Info</h4>
        <p>
          D‑U‑N‑S Number: 017109707
          <br />
          CAGE Code: 8RE81
          <br />
          NAICS Code: 541512
          <br />
        </p>
      </div>
      <div>
        <h4>Contact Us</h4>
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
      </div>
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
