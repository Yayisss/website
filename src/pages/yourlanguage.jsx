import React from "react";
import './language-menu.css'
import Layout from "../components/layout";
import { Link } from "gatsby";
class LanguageMenu extends React.Component {
    render() {
      return (
        <>
        <Layout>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </Layout></>
      );
    }
  }
  
  export default LanguageMenu;