import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";

import MenuModal from "../components/MenuModal"


const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div id={"GatsbyBody"} className={ bodyClass + " showing-menu-modal showing-modal" + (backdropActive ? backdropClasses : "") } >

      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">

        {children}

      </main>

      <Footer />

    </div>
  )
}

export default Layout
