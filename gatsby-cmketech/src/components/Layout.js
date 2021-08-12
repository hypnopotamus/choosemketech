import React, { useState } from "react";
import favicon from '../assets/images/favicon.png'
import Helmet from 'react-helmet'
import Header from "./Header";
import Hero from "./Hero";
import JobCarousel from "./JobCarousel";
import ImageGrid from "./ImageGrid";
import Cards from "./Cards";
import Footer from "./Footer";
import Accordion from "./Accordion";
import CommunityListing from "./CommunityListing";
import MenuModal from "./MenuModal"
import ImageCopy from "./ImageCopy";
import ThreeColumn from "./ThreeColumn";
import Seo from "./Seo";

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div id={"GatsbyBody"} className={ bodyClass + " showing-menu-modal showing-modal" + (backdropActive ? backdropClasses : "") } >
      {children}


      <Helmet>
        <script src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="5fb7aa8ce9cc74cc2896c9ccc813d979"> </script> 
      </Helmet>

      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        <Hero />
        <div className="container">
          <Cards />
          <ImageGrid />
          <Accordion />
          <ImageCopy />
        </div>
        <ThreeColumn />
        <JobCarousel />
        <CommunityListing />
      </main>

      <Footer />

    </div>
  )
}

export default Layout
