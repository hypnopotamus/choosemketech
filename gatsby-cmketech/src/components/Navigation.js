import React, { useState } from "react"
import { useMenuQuery } from "../hooks/useMenuQuery"
import { Link } from "gatsby"


const Navigation = () => {
    const { wpMenu } = useMenuQuery();
    const [subNavShow, setSubNavShow] = useState(false);

    const handleNavClick = (i) =>  {
        setSubNavShow(!i);
    }

    return (
        <nav
            id="nav"
            className="header__nav nav__wrapper"
            aria-label="site navigation"
            role="navigation"
        >
            <ul
                role="menubar"
                aria-hidden="false"
                className="nav nav__list nav__list--primary"
            >
                {wpMenu.menuItems.nodes.map((mainItem) =>
                    !mainItem.parentId ? (
                        <li
                            key={mainItem.id}
                            tabIndex="0"
                            role="menuitem"
                            className={`nav__item nav__item--primary ${mainItem.childItems.nodes.length !== 0 ? "hasChild" : ''}`}
                            
                        >
                            <Link
                                to={mainItem.url}
                                className="nav__link nav__link--primary"
                                activeClassName="active"
                                
                            >
                                {mainItem.label}
                                {mainItem.childItems.nodes.length !== 0 && (
                                    <span 
                                    onClick={() => {handleNavClick()}}
                                    className="nav__link__child-toggle"><i className="fas fa-caret-down"></i></span>
                                )}
                            </Link>
                            {mainItem.childItems.nodes.length !== 0 ? (
                                <ul
                                    role="menubar"
                                    aria-hidden="true"
                                    className={`nav__list nav__list--secondary ${subNavShow ? 'showSubNav' : ''}`}
                                >
                                    {mainItem.childItems.nodes.map(
                                        (childItem) => (
                                            <li
                                                key={childItem.id}
                                                tabIndex="0"
                                                role="menuitem"
                                                className="nav__item nav__item--secondary"
                                            >
                                                <Link
                                                    to={childItem.url}
                                                    activeClassName="active"
                                                    className="nav__link nav__link--secondary"
                                                >
                                                    {childItem.label}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            ) : null}
                        </li>
                    ) : null
                )}
            </ul>
        </nav>
    )
}

export default Navigation
