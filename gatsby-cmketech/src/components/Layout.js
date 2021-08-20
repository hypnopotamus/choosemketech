import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Helmet from "react-helmet";
import favicon from '../assets/images/favicon.png'
import Modal from "./Modal";
import UserSignup from "./UserSignup";

const Layout = ({ children, bodyClass }) => {
  const modalRef1 = useRef();
  const modalRef2 = useRef();

  return (

    <div id={"GatsbyBody"} className={ bodyClass } >
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      <Header  />

      <button onClick={
        () => modalRef1.current.openModal()
      }>
        Modal button
      </button>

      <Modal ref={modalRef1} modalType="user">
        <UserSignup ref={modalRef1} formDisplayed="job-form"/>
      </Modal>
      
      <main id="site-content" role="main">

        {children}

      </main>

      <Footer />

    </div>
  )
}

export default Layout
