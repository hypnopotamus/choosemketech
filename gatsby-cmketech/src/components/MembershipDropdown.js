import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'

const MembershipDropdown = ({toggleNav, ...props}) => {
    const [profileType, setProfileType] = useState(null);  
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [subNavShow, setsubNavShow] = useState(false);    

    const handleDropdownClick = (e) => {
        e.preventDefault();        
        setsubNavShow(!subNavShow);
        if(toggleNav && props.onDropdownOpen){
            props.onDropdownOpen(false)
        }
    }
    const handleMouseLeaveSubNav = () => {
        setsubNavShow(false);
    }
    useEffect(() => {
        if(toggleNav && subNavShow) {
            setsubNavShow(false)
        }
    }, [toggleNav])
    useEffect(() => {
        
        if(window.MemberStack.onReady){
            window.MemberStack.onReady.then(function(member){
                let membershipType = member.membership.name;
                if(membershipType != "Candidate") {
                    membershipType = "premium-plan"
                    setUserName(member['company-name']) 
                }else {
                    setFirstName(member['first-name']);
                    setUserName(member['first-name'] + ' ' + member['last-name'])
                }
                setProfileType(membershipType)
            });
        }
    }, [])    
    
    
    const CandidateView = () => {
        return(
            <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                <a href="#" onClick={(e) => handleDropdownClick(e)}  className="utilityNav__link utilityNav__link--primary" >
                    {subNavShow  && (
                        <>
                        <i className="fas fa-times" id="membershipDropdown__close"></i><span className="membershipDropdown__close">Close</span>
                        <i className="fas fa-user-circle membershipDropdown__name"></i><span className="membershipDropdown__name">{firstName}</span> <i className="fas fa-caret-down"></i>
                        </>
                        
                    )}
                    {!subNavShow &&  (
                        <>
                        <i className="fas fa-user-circle"></i><span>{firstName}</span> <i className="fas fa-caret-down"></i>
                        </>
                    )}
                </a>
                <CandidateSubnav />
            </li>
        )
    }
    const CandidateSubnav = () => {
        return (
            <div className="utilityNav__member__subnav--container">
                <ul 
                    onMouseLeave={()=>handleMouseLeaveSubNav()}
                    role="menubar"
                    className={`nav__list nav__list--secondary ${subNavShow ? "showSubNav": ""}`}>
                    <div className="nav__user">
                    <i className="fas fa-user-circle"></i><span>{userName}</span> 
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
                    {/* <li className="nav__link">
                        <Link to="#">
                            New Job Listings
                        </Link>
                    </li> */}
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
                        <Link to="/#/ms/logout">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    const CompanyView = () => {
        return (

            <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                <a href="#" onClick={(e) => handleDropdownClick(e)} className="utilityNav__link utilityNav__link--primary" >
                {subNavShow  && (
                    <>
                    <i className="fas fa-times" id="membershipDropdown__close"></i><span className="membershipDropdown__close">Close</span>
                    <i className="fas fa-user-circle membershipDropdown__name"></i><span className="membershipDropdown__name">{userName}</span> <i className="fas fa-caret-down"></i>
                    </>
                    
                )}
                {!subNavShow &&  (
                    <>
                    <i className="fas fa-user-circle"></i><span>{userName}</span> <i className="fas fa-caret-down"></i>
                    </>
                )}
                </a>
                <CompanySubnav />
            </li>
        )
    }
    const CompanySubnav = () => {
        return (
            <div className="utilityNav__member__subnav--container">
                <ul 
                    onMouseLeave={()=>handleMouseLeaveSubNav()}
                    role="menubar"
                    className={`nav__list nav__list--secondary ${subNavShow ? "showSubNav": ""}`}>
                    <div className="nav__user">
                    <i className="fas fa-user-circle"></i><span>{userName}</span> 
                    </div>
                    
                    <li className="nav__link-group__title">
                        <h4>
                            Company
                        </h4>
                    </li>
                    <li className="nav__link">
                        <Link to="/company-profile">
                            Company Profile
                        </Link>
                    </li>
                    {/* <li className="nav__link">
                        <Link to="#">
                            Job Postings
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to="#">
                            Candidate Pool
                        </Link>
                    </li>
                    <li className="nav__link">
                        <Link to="#">
                            Listing + Credits
                        </Link>
                    </li> */}
                    <li className="nav__link-group__title">
                        <h4>
                            Your Account
                        </h4>
                    </li>
                    <li className="nav__link">
                        <Link to="/help">
                            Settings
                        </Link>
                    </li>
                    {/* <li className="nav__link">
                        <Link to="/faq">
                            Notifications
                        </Link>
                    </li> */}
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
                        <Link to="/#/ms/logout">
                            Log Out
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
        { profileType === "Candidate" && <CandidateView /> }
        { profileType === "premium-plan" && <CompanyView /> }
        </>
    )
}

export default MembershipDropdown