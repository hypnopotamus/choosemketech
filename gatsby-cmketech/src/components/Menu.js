import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import UniversalLink from "./UniversalLink"

const Menu = () => {
  return (
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
        <li><a href="/tech-scene">Tech scene <i class="fas fa-caret-down"></i></a></li>
        <li><a href="#" className="search"><i class="fas fa-search"></i></a></li>
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
