import React, { useState } from "react"
import Header from "./Header"
import Hero from "./Hero"
import IntroCopy from "./IntroCopy"
import ThreeColumn from "./ThreeColumn"
import CardCopy from "./CardCopy"
import JobCarousel from "./JobCarousel"
import Footer from "./Footer"
import Cards from "./Cards"
import ImageCopy from "./ImageCopy"

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
        <Hero />
        <IntroCopy />
        <ThreeColumn />
        <CardCopy />
        <JobCarousel />
        <Cards />
        <ImageCopy />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
