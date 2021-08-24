import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import favicon from '../assets/images/favicon.png'
import Modal from "./Modal";
import ModalModules from "./ModalModules";

const Layout = ({ children, bodyClass }) => {
  const modalRef1 = useRef();
  const modalRef2 = useRef();

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
    <button onClick={
        () => modalRef1.current.openModal()
      }>
        Modal button
      </button>

      <Modal ref={modalRef1}>
        <ModalModules ref={modalRef1} formDisplayed="login"/>
      </Modal>
    </div>
  )
}

export default Layout
