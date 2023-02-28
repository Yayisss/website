import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import './contact.css'
import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
    <div className="data">
      <h1>Contact Us</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
    <br /><br />
    <div className="back">
    <Link to="/">Go back to the homepage</Link>
    </div>
    <br />
    <br />
   </Layout> 
  )
}

export default ContactPage
