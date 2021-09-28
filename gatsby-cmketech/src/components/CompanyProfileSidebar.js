import React from "react"
import { Link } from "gatsby"

const CompanyProfileSidebar = ({ sidebar }) => {
  return (
    <>
      <div className="sidebar left">
        <ul>
          <li>
            <h4>Company</h4>
          </li>
          <li>
            <Link to="/company-profile" className="link">
              Company Profile
            </Link>
          </li>
          <li>
            <Link to="/job-postings" className="link">
              Job Postings
            </Link>
          </li>
          {/* <li>
            <Link to="/candidate-pool" className="link">
              Candidate Pool
            </Link>
          </li> */}
          <li>
            <Link to="/recruit-with-us" className="link">
              Tiers+ Billing
            </Link>
          </li>
          <li>
            <h4>Your Account</h4>
          </li>
          <li>
            <Link to="/settings" className="link">
              Account Settings
            </Link>
          </li>
          {/* <li>
            <Link to="/notifications" className="link">
              Notifications
            </Link>
          </li> */}
        </ul>
        <ul>
          <li>
            <Link to="/help" className="link">
              Help
            </Link>
          </li>
          <li>
            <Link href="/help" className="link">
              FAQ
            </Link>
          </li>
          <li>
            <a href="/#/ms/logout" className="link">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CompanyProfileSidebar
