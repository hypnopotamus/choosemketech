import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import UniversalLink from "./UniversalLink"

const Menu = () => {
  return (
    <nav>
      <ul className="nav--top-references">
        <li><Link to="/help"><i className="fas fa-question-circle"></i> <span>Help</span></Link></li>
        <li><Link to="/recruit-with-us"><i className="fas fa-users"></i> <span>Recruit with us</span></Link></li>
        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> <span>Login</span></Link></li>
      </ul>
      <ul className="nav--top-main"> 
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/why-milwaukee">Why Milwaukee</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/tech-scene">Tech scene <i class="fas fa-caret-down"></i></Link></li>
        <li><Link to="#" className="search"><i class="fas fa-search"></i></Link></li>
      </ul>
    </nav>

    // <nav className="header" aria-label="Horizontal" role="navigation">
    //   <ul className="primary-menu reset-list-style"> {
    //     wpMenu.menuItems.nodes.map((menuItem, i) => {
    //       const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url
    //       const itemId = "menu-item-" + menuItem.databaseId
    //       return (
    //         <li id={itemId} key={i + menuItem.url} className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-home " + itemId}>
    //         <UniversalLink to={path} activeClassName={"current-menu-item current_page_item"} >
    //         {menuItem.label}
    //         </UniversalLink>
    //         </li>
    //       )
    //       }
    //     )
    //   }
    //   </ul>
    // </nav>
  )
}

export default Menu
