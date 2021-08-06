import React from 'react';
import { Link } from 'gatsby'

const UtilityNav = () => {
    return(
        <div className="utilityNav">
            <ul
            role="menubar"
            aria-hidden="false"
            className="utilityNav__list utilityNav__list--primary">
                <li
                tabIndex="0"
                className="utilityNav__item utilityNav__item--primary">
                    <Link 
                    className="utilityNav__link utilityNav__link--primary"
                    to="/">
                        Help
                    </Link>
                </li>
                <li
                tabIndex="0"
                className="utilityNav__item utilityNav__item--primary">
                    <Link 
                    className="utilityNav__link utilityNav__link--primary"
                    to="/">
                        Recruit with Us
                    </Link>
                </li>
                <li
                tabIndex="0"
                className="utilityNav__item utilityNav__item--primary">
                    <Link 
                    className="utilityNav__link utilityNav__link--primary"
                    to="/">
                        Login
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default UtilityNav