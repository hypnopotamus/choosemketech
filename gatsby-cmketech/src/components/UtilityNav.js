import React, { useState } from 'react';
import { Link } from 'gatsby'
import { useUtilityNavQuery } from "../hooks/useUtilityNavQuery"

const UtilityNav = () => {
    const [profileType, setProfileType] = useState("");   
    const [subNavShow, setsubNavShow] = useState(false);    
    const { wpMenu } = useUtilityNavQuery()

    const handleDropdownClick = (e) => {
        e.preventDefault();
        setsubNavShow(!subNavShow);
    }

    if(window.MemberStack){
        window.MemberStack.onReady.then(function(member){
            let membershipType = member.membership.name;
            setProfileType(membershipType)
        });
        window.MemberStack.reload();
    }
    const CandidateView = () => {
        return(
            <>
            {/* <li role="menuitem" className="utilityNav__item utilityNav__item--primary" data-ms-content="members">
                    <a href="/member-profile"  className="utilityNav__link utilityNav__link--primary">
                        <i className="fas fa-user"></i><span>Member Profile</span>
                    </a>
                </li> */}
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                    <a href="#" onClick={(e) => handleDropdownClick(e)}  className="utilityNav__link utilityNav__link--primary" >
                        <i className="fas fa-user-circle"></i><span data-ms-member="first-name"></span> <i className="fas fa-caret-down"></i>
                    </a>
                    <CandidateSubnav />
                </li>
            </>
        )
    }
    const CandidateSubnav = () => {
        return (
            <div className="utilityNav__member__subnav--container">
                <ul 
                    role="menubar"
                    className={`nav__list nav__list--secondary ${subNavShow ? "showSubNav": ""}`}>
                    <div className="nav__user">
                    <i className="fas fa-user-circle"></i><span data-ms-member="first-name"></span> 
                    </div>
                    
                    <li className="nav__link-group__title">
                        <h4>
                            User Profile
                        </h4>
                    </li>
                    <li className="nav__link">
                        <Link to="/member-profile">
                            Profile Settings
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to="#">
                            New Job Listings
                        </Link>
                    </li>
                    <li className="nav__link-group__title">
                        <h4>
                            Other
                        </h4>
                    </li>
                    <li className="nav__link">
                        <Link to="/help">
                            Help
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to="/faq">
                            FAQs
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to="#">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const CompanyView = () => {
        return (
            <>
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
            </>
        )
    }
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
                { profileType === "Candidate" && <CandidateView /> }
                { profileType === "premium-plans" && <CompanyView /> }
            </ul>
        </div>
    )
}

export default UtilityNav 