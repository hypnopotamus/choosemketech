import React, { useState } from "react"
import Header from "./Header"
import Hero from "./Hero"
import IntroCopy from "./IntroCopy"
import Tiles from "./Tiles"
import CardCopy from "./CardCopy"
import JobCarousel from "./JobCarousel"
import Footer from "./Footer"


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

      <main id="site-content" role="main">
        {children}
        {
          /* 
          Temporily putting all components into layout, I'll need to 
          create a page that uses a unique template for the rest 
          of the site 
          */
        }
        <Hero />
        <IntroCopy />
        <Tiles />
        <CardCopy />
        <JobCarousel />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
