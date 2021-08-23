import React from 'react';
import { Link } from 'gatsby'
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"

const UtilityNav = () => {
    const { wpMenu } = useUtilityNavQuery()
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
                                <Link 
                                className="utilityNav__link utilityNav__link--primary"
                                to={mainItem.url}>
                                    <i className={
                                        mainItem.cssClasses.join(' ')
                                    }></i>
                                    {mainItem.label}
                                </Link>
                            </li>
                    ) : null
                )}
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                    <a href="#"  className="utilityNav__link utilityNav__link--primary" data-ms-content="premium-plans">
                        <i className="fas fa-user-circle"></i><span data-ms-member="organizationname"></span>
                    </a>
                    <a href="#"  className="utilityNav__link utilityNav__link--primary" data-ms-content="!premium-plans">
                        <i className="fas fa-user-circle"></i><span data-ms-member="firstname"></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UtilityNav 