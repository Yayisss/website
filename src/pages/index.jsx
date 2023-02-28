import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Header from "../components/header"
import InfoContainer from "../components/InfoCont"
import { Breadcrumbs } from "react-breadcrumbs-dynamic"
import { Link } from 'gatsby';
import styled from 'styled-components';
import Register from "../components/Register"




const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;


const links = [
  {
    text: "Project1",
    url: "/projects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius in mi a vulputate. Donec lobortis purus odio, at maximus nunc vulputate et.",
  },
  {
    text: "Project 2",
    url: "/yourlanguage",
    description:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius in mi a vulputate. Donec lobortis purus odio, at maximus nunc vulputate et.",  },
  {
    text: "Project 3",
    url: "/contact",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius in mi a vulputate. Donec lobortis purus odio, at maximus nunc vulputate et.",  },
  {
    text: "Project 4",
    url: "/t&c",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius in mi a vulputate. Donec lobortis purus odio, at maximus nunc vulputate et.",  },
  {
    text: "Project 5",
    url: "/otherapps",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius in mi a vulputate. Donec lobortis purus odio, at maximus nunc vulputate et.",  },
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
  (
    <Header>
      <Breadcrumbs />,
      
    </Header>
  ),
  <div className="ajuste" >
        <h1 className="asomate">
          Welcome to <b>Scrum4u!</b>
        </h1>
      </div>,
  (
  
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
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />
export default IndexPage


