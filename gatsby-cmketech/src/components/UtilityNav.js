import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"
import Modal from "./Modal"
import ModalModules from "./ModalModules"
import MembershipDropdown from "./MembershipDropdown"

const UtilityNav = () => {
  const { wpMenu } = useUtilityNavQuery()
  const modalRef1 = useRef()
  const modalRef2 = useRef()

  return (
    <div className="utilityNav">
      <ul role="menubar" aria-hidden="false" className="utilityNav__list utilityNav__list--primary">
        {wpMenu.menuItems.nodes.map((mainItem) =>
          !mainItem.parentId ? (
            <li role="menuitem" key={mainItem.id} className="utilityNav__item utilityNav__item--primary">
              <Link className="utilityNav__link utilityNav__link--primary" to={mainItem.url}>
                <i className={mainItem.cssClasses.join(" ")}></i>
                <span>{mainItem.label}</span>
              </Link>
            </li>
          ) : null
        )}
        {/* Inserted this way because Gatsby Link should only be used for internal routing */}
        <li role="menuitem" className="utilityNav__item utilityNav__item--primary">
          <a className="utilityNav__link utilityNav__link--primary" href="mailto:contact@mketech.org">
            <i class="fas fa-envelope"></i>
            <span>Contact Us</span>
          </a>
        </li>
        {/* <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="!members">
          <a href="#" className="utilityNav__link utilityNav__link--primary" onClick={() => modalRef2.current.openModal()}>
            <i className="fas fa-suitcase"></i>
            <span>Find a Job</span>
          </a>
        </li> */}
        <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="!members">
          <a href="#" className="utilityNav__link utilityNav__link--primary" onClick={() => modalRef1.current.openModal()}>
            <i className="fas fa-sign-in-alt"></i>
            <span>Log In</span>
          </a>
        </li>
        <MembershipDropdown />
      </ul>
      <Modal ref={modalRef1}>
        <ModalModules ref={modalRef1} formDisplayed="login" />
      </Modal>
      <Modal ref={modalRef2}>
        <ModalModules ref={modalRef2} formDisplayed="job-form" />
      </Modal>
    </div>
  )
}

export default UtilityNav
