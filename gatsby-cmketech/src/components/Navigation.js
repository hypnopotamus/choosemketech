import React, { useState } from "react"
import { useMenuQuery } from "../hooks/useMenuQuery"
import { Link } from "gatsby"

const Navigation = ({ toggleNav }) => {
    const { wpMenu } = useMenuQuery()
    const [subNavShow, setSubNavShow] = useState(null)

    const handleNavClick = (e, i) => {
        e.preventDefault()
        if (subNavShow === i) {
            return setSubNavShow(null)
        }
        setSubNavShow(i)
    }

    const SubMenu = ({ data }) => {
        return (
            <ul role="menubar" aria-hidden="true"
                className={`nav__list nav__list--secondary ${
                    subNavShow == data.id ? "showSubNav" : ""
                }`}>
                {data.childItems.nodes.map((childItem) => (
                    <li key={childItem.id} role="menuitem" className="nav__item nav__item--secondary">
                        <Link to={childItem.url} activeClassName="active" className="nav__link nav__link--secondary">
                            {childItem.label}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <nav id="nav" className={`header__nav nav__wrapper ${ toggleNav ? "nav-open" : " " }`} aria-label="site navigation" role="navigation">
            <ul role="menubar" aria-hidden="false" className="nav nav__list nav__list--primary">
                {wpMenu.menuItems.nodes.map((mainItem) =>
                    !mainItem.parentId ? (
                        <li key={mainItem.id} role="menuitem"
                            className={`nav__item nav__item--primary ${
                                mainItem.childItems.nodes.length !== 0
                                    ? "hasChild"
                                    : ""
                            }`}>
                            <Link className="nav__link nav__link--primary" activeClassName="active" to={mainItem.url}>
                                {mainItem.label}
                                {mainItem.childItems.nodes.length !== 0 && (
                                    <span
                                        onClick={(e) => {
                                            handleNavClick(e, mainItem.id)
                                        }}
                                        onKeyDown={() =>
                                            handleNavEnter(mainItem.id)
                                        }
                                        className="nav__link__child-toggle">
                                        <i className="fas fa-caret-down"></i>
                                    </span>
                                )}
                            </Link>
                            {mainItem.childItems.nodes.length !== 0 ? (
                                <SubMenu data={mainItem} menuIndex={subNavShow} />
                            ) : null}
                        </li>
                    ) : null
                )}
            </ul>
        </nav>
    )
}

export default Navigation
