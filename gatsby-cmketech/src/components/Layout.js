import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import favicon from '../assets/images/favicon.png'

const Layout = ({ children, bodyClass }) => {

  return (

    <div id={"GatsbyBody"} className={ bodyClass } >
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header  />
      <main id="site-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )

}

export default Layout
