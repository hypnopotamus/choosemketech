import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import IntroCopy from "./IntroCopy";
import CardCopy from "./CardCopy";
import JobCarousel from "./JobCarousel";
import ImageGrid from "./ImageGrid";
import Cards from "./Cards";
import Footer from "./Footer";
import Accordion from "./Accordion";
import CommunityListing from "./CommunityListing";
import MenuModal from "./MenuModal"
import ImageCopy from "./ImageCopy";
import ThreeColumn from "./ThreeColumn";

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
        <Hero />
        <div className="container">
          <IntroCopy />
          <Cards />
          <ImageGrid />
          <Accordion />
        </div>
        <ThreeColumn />
        <JobCarousel />
        <Cards />
        <ImageGrid />
        <Accordion />
        <CommunityListing />
        <ImageCopy />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
