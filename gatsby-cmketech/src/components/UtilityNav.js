import React from 'react';
import { Link } from 'gatsby'
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"

const UtilityNav = () => {
    const { wpMenu } = useUtilityNavQuery()
    console.log(wpMenu)
    window.MemberStack.reload();
    return(
        <div className="utilityNav">
            <ul
            role="menubar"
            aria-hidden="false"
            className="utilityNav__list utilityNav__list--primary">
                {wpMenu.menuItems.nodes.map((mainItem) =>
                    !mainItem.parentId ? (
                        <li
                            key={mainItem.id}
                            tabIndex="0"
                            className="utilityNav__item utilityNav__item--primary">
                                <Link 
                                className="utilityNav__link utilityNav__link--primary"
                                to="/">
                                    <i className={
                                        mainItem.cssClasses.join(' ')
                                    }></i>
                                    {mainItem.label}
                                </Link>
                            </li>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default UtilityNav