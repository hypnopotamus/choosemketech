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
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="members">
                    <a href="javascript:;" className="utilityNav__link utilityNav__link--primary">
                        <i className="fas fa-user-circle"></i><span data-ms-member="name"></span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default UtilityNav