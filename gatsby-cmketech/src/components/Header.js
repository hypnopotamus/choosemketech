import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Navigation from "./Navigation"
import UtilityNav from "./UtilityNav"
import { chooseMKELogo } from "../assets/assets"
import MembershipDropdown from "./MembershipDropdown"

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
    const [displayMobileNav, setDisplayedMobileNav] = useState(false)

    const handleMenuClick = () => {
        setDisplayedMobileNav(!displayMobileNav)
    }

    const handleSearchToggle = (e) => {
        e.preventDefault();
    }


    return (
        <header
            id="site-header"
            className={`header-footer-group container header ${
                displayMobileNav ? "opened-nav" : ""
            }`}
        >
            <div className="header__utility-nav">
                <UtilityNav />
            </div>
            <div className="header__branding">
                <div className="logo">
                    <Link to="/">
                        <img src={chooseMKELogo} alt="Choose MKE Tech Logo" />
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
                    onClick={() => handleMenuClick()}
                >
                    <span className="toggle-inner">
                        <span className="toggle-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                        <span className="toggle-text">Menu</span>
                    </span>
                </button>
                <Navigation toggleNav={displayMobileNav} />
                <MembershipDropdown membershipToggle={displayMobileNav}/>
                <a className="header__global-search" href="#" onClick={(e)=>handleSearchToggle(e)}><i className="fas fa-search"></i></a>
            </div>
        </header>
    )
}

export default Header
