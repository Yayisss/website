import * as React from "react"
import { Link } from "gatsby"
import { BreadcrumbsProvider, Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import "../styles/Header.css"
const Header = () => {
  return (
    <BreadcrumbsProvider>
      <nav className="header">
        <Breadcrumbs
          separator=
          {<i className="fa fa-angle-right">
            <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
            <BreadcrumbsItem to="/projects">Projects</BreadcrumbsItem>
            <BreadcrumbsItem to="/yourlanguage">Your Language</BreadcrumbsItem>
          </i>}
          finalItem={"b"}
          className="breadcrumbs"
        />
      </nav>
    </BreadcrumbsProvider>
  )
}

export default Header
