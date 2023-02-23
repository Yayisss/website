import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header"
import InfoContainer from "../components/InfoCont"
import { Breadcrumbs } from "react-breadcrumbs-dynamic"

const links = [
  {
    text: "Projects",
    url: "/projects",
    description:
      "crear proyectitosss",
  },
  {
    text: "Your language",
    url: "/yourlanguage",
    description:
      "en que idioma t hablo o q",
  },
  {
    text: "Contact",
    url: "/contact",
    description:
      "me kieres decir algo?",
  },
  {
    text: "Terms and privacy statements",
    url: "/t&c",
    description:
      "t voy a robar datos y ya aceptaste",
  },
  {
    text: "Other apps",
    url: "/otherapps",
    description:
      "descarga otra cosaaa",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]




const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Header>
    <Breadcrumbs/>
    <div className={styles.textCenter}>

      <h1 className="header/scrum">
        Welcome to <b>Scrum4u!</b>
      </h1>

    </div>
    <div>
      <h1>Página de Patos</h1>
      <InfoContainer/>
    </div>

  </Header>,

  <Layout>
    
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export default IndexPage


