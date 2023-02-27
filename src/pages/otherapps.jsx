import React from "react"
import Layout from "../components/layout"
import styles from "/src/components/other-apps.module.css"

const OtherApps = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Other Apps</h1>
        <p>Check out our other apps:</p>
        <ul className={styles.appList}>
          <li>
            <a href="#">App 1</a>
          </li>
          <li>
            <a href="#">App 2</a>
          </li>
          <li>
            <a href="#">App 3</a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default OtherApps
