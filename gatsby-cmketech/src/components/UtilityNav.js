import React, { useState, useRef } from 'react';
import { Link } from 'gatsby'
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"
import Modal from "./Modal";
import ModalModules from "./ModalModules";
import MembershipDropdown from './MembershipDropdown';


const UtilityNav = () => {
    const { wpMenu } = useUtilityNavQuery()
    const modalRef1 = useRef();

    return(
        <div className="utilityNav">
            <ul
            role="menubar"
            aria-hidden="false"
            className="utilityNav__list utilityNav__list--primary">
                {wpMenu.menuItems.nodes.map((mainItem) =>
                    !mainItem.parentId ? (
                        <li
                            role="menuitem"
                            key={mainItem.id}
                            className="utilityNav__item utilityNav__item--primary">
                                <Link className="utilityNav__link utilityNav__link--primary" to={mainItem.url}>
                                    <i className={ mainItem.cssClasses.join(' ') }></i><span>{ mainItem.label }</span>
                                </Link>
                            </li>
                    ) : null
                )}
                <MembershipDropdown />
            </ul>
            <Modal ref={modalRef1}>
                <ModalModules ref={modalRef1} formDisplayed="login"/>
            </Modal>
        </div>
    )
}

export default UtilityNav 