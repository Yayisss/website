import * as React from "react"
import { Link } from "gatsby"
import { BreadcrumbsProvider, Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import "../styles/Header.css"
const Header = () => {
  return (
  
      <nav className="header">
      <div className="language-menu">
          <ul>
            <li>English</li>
            <li>Español</li>
            <li>Français</li>
          </ul>
        </div>
      </nav>

  )
}

export default Header
