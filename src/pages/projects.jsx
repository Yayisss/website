import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import './projects.css'
const SecondPage = () => (
  <Layout>
    <div className="contenedorInfo">
    <h1>Hi from the projects</h1>
    <p>Welcome to page</p>
    <Link to="/">Go back to the homepage</Link>
    <br /> <br />
    <label htmlFor="">crear proyecto</label>
    <input type="text" name="project" id="" placeholder="Ej. Proyecto 1" />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
