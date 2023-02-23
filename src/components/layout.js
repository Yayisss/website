import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import Header from "./header"
import "../styles/layout.css"
import '../styles/Menu.css'; // import the stylesheet for the menu

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >

        <nav className="navbar" id="menu_side">
          <ul>
            <li>
              <Link to="/projects/" className="option">Projects</Link>
            </li>
            <li>
              <Link to="/languages/" className="option">Your language</Link>
            </li>
            <li>
              <Link to="/contact/" className="option">Contact</Link>
            </li>
            <li>
              <Link to="/terms/" className="option">Terms</Link>
            </li>
            <li>
              <Link to="/privacy/" className="option">Privacy Statements</Link>
            </li>
          </ul>
        </nav>

        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >

          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="">Scrum4u</a>
        </footer>
      </div>

  

    </>
  )
}
<><script src="js/boton.js"></script><script src="js/menu.js"></script></>
export default Layout
