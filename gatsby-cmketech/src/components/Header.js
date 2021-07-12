import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Menu from "./Menu"
import ToggleIcon from "../assets/svg/toggle.inline.svg"

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
    <header>
      <div class="logo">
        <span>Choose MKE Tech</span>
      </div>
      <nav>
        <ul class="nav--top-references">
          <li><a href="/help"><i class="fas fa-question-circle"></i> Help</a></li>
          <li><a href="/recruit-with-us"><i class="fas fa-users"></i> Recruit with us</a></li>
          <li><a href="/login"><i class="fas fa-sign-in-alt"></i> Login</a></li>
        </ul>
        <ul class="nav--top-main">
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/why-milwaukee">Why Milwaukee</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/tech-scene">Tech scene</a></li>
        </ul>
      </nav>
    </header>
    // <header id="site-header" className="header-footer-group" role="banner">
    //   <div className="header-inner section-inner">
    //     <div className="header-titles-wrapper">
    //       <div className="header-titles">
    //         <h1 className="site-title">
    //           <Link
    //             to="/"
    //             dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
    //           />
    //         </h1>
    //         <div
    //           className="site-description"
    //           dangerouslySetInnerHTML={{
    //             __html: wp.generalSettings.description,
    //           }}
    //         />
    //       </div>

    //       <button
    //         className="toggle nav-toggle mobile-nav-toggle"
    //         data-toggle-target=".menu-modal"
    //         data-toggle-body-class="showing-menu-modal"
    //         aria-expanded="false"
    //         data-set-focus=".close-nav-toggle"
    //         onClick={(e) => toggleBackdrop(e, true)}
    //       >
    //         <span className="toggle-inner">
    //           <span className="toggle-icon">
    //             <ToggleIcon />
    //           </span>
    //           <span className="toggle-text">Menu</span>
    //         </span>
    //       </button>
    //     </div>

    //     <div className="header-navigation-wrapper">
    //       <Menu />

    //       <div className="header-toggles hide-no-js">
    //         <div className="toggle-wrapper nav-toggle-wrapper has-expanded-menu">
    //           <button
    //             className="toggle nav-toggle desktop-nav-toggle"
    //             data-toggle-target=".menu-modal"
    //             data-toggle-body-class="showing-menu-modal"
    //             aria-expanded="false"
    //             data-set-focus=".close-nav-toggle"
    //             onClick={(e) => toggleBackdrop(e, true)}
    //           >
    //             <span className="toggle-inner">
    //               <span className="toggle-text">Menu</span>
    //               <span className="toggle-icon">
    //                 <ToggleIcon />
    //               </span>
    //             </span>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Header
