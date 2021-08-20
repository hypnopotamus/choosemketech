import React, { useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import UserSignup from "./UserSignup";

const Layout = ({ children, bodyClass }) => {
  const modalRef1 = useRef();
  const modalRef2 = useRef();

  return (

    <div id={"GatsbyBody"} className={ bodyClass } >

      <Header  />

      <button onClick={
        () => modalRef1.current.openModal()
      }>
        Modal button
      </button>

      <Modal ref={modalRef1} modalType="user">
        <UserSignup ref={modalRef1} />
      </Modal>

      <button onClick={
        () => modalRef2.current.openModal()
      }>
        Modal 2 button
      </button>

      <Modal ref={modalRef2} modalType="user">
        <h1>Woah! A new Modal!</h1>
        <UserSignup ref={modalRef1} />
      </Modal>
      
      <main id="site-content" role="main">

        {children}

      </main>

      <Footer />

    </div>
  )
}

export default Layout
