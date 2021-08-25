import React, { useState } from 'react';
import { Link } from 'gatsby'

const MembershipDropdown = () => {
    const [profileType, setProfileType] = useState(null);  
    const [userName, setUserName] = useState("");
    const [subNavShow, setsubNavShow] = useState(false);    

    const handleDropdownClick = (e) => {
        e.preventDefault();
        setsubNavShow(!subNavShow);
    }
    const handleMouseLeaveSubNav = () => {
        setsubNavShow(false);
    }

    if(window.MemberStack){
        window.MemberStack.onReady.then(function(member){
            let membershipType = member.membership.name;
            console.log(member)
            if(membershipType != "Candidate") {
                membershipType = "premium-plan"
            }
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
                    onMouseLeave={()=>handleMouseLeaveSubNav()}
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
                    <a href="/company-profile"  className="utilityNav__link utilityNav__link--primary" >
                        <i className="fas fa-user"></i><span>Company Profile</span>
                    </a>
                </li>
                <li role="menuitem" className="utilityNav__item utilityNav__item--primary utilityNav__item--members" data-ms-content="members">
                    <a href="#" onClick={(e) => handleDropdownClick(e)} className="utilityNav__link utilityNav__link--primary" >
                        <i className="fas fa-user-circle"></i><span data-ms-member="company-name"></span> <i className="fas fa-caret-down"></i>
                    </a>
                    <CompanySubnav />
                </li>
            </>
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
                    <i className="fas fa-user-circle"></i><span data-ms-member="first-name"></span> 
                    </div>
                    
                    <li className="nav__link-group__title">
                        <h4>
                            Company
                        </h4>
                    </li>
                    <li className="nav__link">
                        <Link to="/member-profile">
                            Company Profile
                        </Link>
                    </li>
                    <li className="nav__link">
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
                    </li>
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
                    <li className="nav__link">
                        <Link to="/faq">
                            Notifications
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

    return (
        <>
        { profileType === "Candidate" && <CandidateView /> }
        { profileType === "premium-plan" && <CompanyView /> }
        </>
    )
}

export default MembershipDropdown