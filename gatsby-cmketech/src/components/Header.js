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
    <header className="header--nav-main">
      <div className="logo">
        <Link to="/"><span>Choose MKE Tech</span></Link>
      </div>
      <nav>
        <ul className="nav--top-references">
          <li><a href="/help"><i className="fas fa-question-circle"></i> <span>Help</span></a></li>
          <li><a href="/recruit-with-us"><i className="fas fa-users"></i> <span>Recruit with us</span></a></li>
          <li><a href="/login"><i className="fas fa-sign-in-alt"></i> <span>Login</span></a></li>
        </ul>
        <ul className="nav--top-main">
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/why-milwaukee">Why Milwaukee</a></li>
          <li><a href="/companies">Companies</a></li>
          <li><a href="/tech-scene">Tech scene <i className="fas fa-caret-down"></i></a> <span>Test SubItem</span></li>
          <li><a href="#" className="search"><i className="fas fa-search"></i></a></li>
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