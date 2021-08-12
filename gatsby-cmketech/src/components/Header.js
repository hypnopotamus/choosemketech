import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Navigation from "./Navigation"
import UtilityNav from "./UtilityNav"
import { chooseMKELogo } from "../assets/assets";

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)
  return (
    <header id="site-header" className="header-footer-group container header" role="banner">
      <div className="header__utility-nav">
        <UtilityNav />
      </div>
      <div className="header__branding">
        <div className="logo">
            <Link to="/">
              <span>Choose MKE Tech</span>
            </Link>
          </div>
      </div>
      <div className="header--nav-main">
        <button
          className="toggle nav-toggle mobile-nav-toggle"
          data-toggle-target=".menu-modal"
          data-toggle-body-class="showing-menu-modal"
          aria-expanded="false"
          data-set-focus=".close-nav-toggle"
          onClick={(e) => toggleBackdrop(e, true)}>
          <span className="toggle-inner">
            <span className="toggle-icon">
              <i className="fas fa-bars"></i>
            </span>
            <span className="toggle-text">Menu</span>
          </span>
        </button>
        <Navigation />
        <div className="header__global-search">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </header>
  )
}

export default Header
