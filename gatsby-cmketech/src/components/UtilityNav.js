import React, { useRef } from 'react';
import { Link } from 'gatsby'
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"
import Modal from "./Modal";
import ModalModules from "./ModalModules";


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
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="members">
                    <a href="/member-profile"  className="utilityNav__link utilityNav__link--primary" data-ms-content="!premium-plans">
                        <i className="fas fa-user"></i><span>Member Profile</span>
                    </a>
                </li>
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                    <a href="#"  className="utilityNav__link utilityNav__link--primary" data-ms-content="!premium-plans">
                        <i className="fas fa-user-circle"></i><span data-ms-member="first-name"></span> <i className="fas fa-caret-down"></i>
                    </a>
                </li>
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="members">
                    <a href="/company-profile"  className="utilityNav__link utilityNav__link--primary" data-ms-content="premium-plans">
                        <i className="fas fa-user"></i><span>Company Profile</span>
                    </a>
                </li>
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                    <a href="#"  className="utilityNav__link utilityNav__link--primary" data-ms-content="premium-plans">
                        <i className="fas fa-user-circle"></i><span data-ms-member="company-name"></span> <i className="fas fa-caret-down"></i>
                    </a>
                </li>
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="!premium-plans">
                    <a href="#"  className="utilityNav__link utilityNav__link--primary" onClick={ () => modalRef1.current.openModal() }>
                        <i className="fas fa-sign-in-alt"></i><span>Log In</span>
                    </a>
                </li>
            </ul>
            <Modal ref={modalRef1}>
                <ModalModules ref={modalRef1} formDisplayed="login"/>
            </Modal>
        </div>
    )
}

export default UtilityNav 