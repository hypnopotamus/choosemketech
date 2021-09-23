import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import favicon from "../assets/images/favico/favicon.ico"
import apple from "../assets/images/favico/apple-touch-icon.png"
import favico32 from "../assets/images/favico/favicon-32x32.png"
import favico16 from "../assets/images/favico/favicon-16x16.png"
import safari from "../assets/images/favico/safari-pinned-tab.svg"

const Layout = ({ children, bodyClass }) => {
  return (
    <div id={"GatsbyBody"} className={bodyClass}>
      <Helmet>
        <link rel="icon" href={favicon} />
        <link rel="apple-touch-icon" sizes="180x180" href={apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favico32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favico16} />
        <link rel="mask-icon" href={safari} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      <Header />
      <main id="site-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
