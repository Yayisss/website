import React from "react"
import Layout from "../components/layout"
import styles from "/src/pages/styles/terms.css"

const TermsPage = () => {
  return (
    <Layout>
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p>These are the terms and conditions for using our website.</p>
        <ul>
          <li>You must be 18 years or older to use this website.</li>
          <li>All content on this website is owned by us.</li>
          <li>
            You may not reproduce, duplicate, copy, sell, or otherwise exploit
            any content on this website without our express written permission.
          </li>
          <li>
            We reserve the right to change these terms and conditions at any
            time.
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default TermsPage
