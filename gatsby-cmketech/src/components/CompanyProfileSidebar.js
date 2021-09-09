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
            <a href="" className="link">
              Company Profile
            </a>
          </li>
          <li>
            <a href="" className="link">
              Job Postings
            </a>
          </li>
          <li>
            <a href="" className="link">
              Candidate Pool
            </a>
          </li>
          <li>
            <a href="" className="link">
              Tiers+ Billing
            </a>
          </li>
          <li>
            <h4>Your Account</h4>
          </li>
          <li>
            <a href="" className="link">
              Account Settings
            </a>
          </li>
          <li>
            <a href="" className="link">
              Notifications
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" className="link">
              Help
            </a>
          </li>
          <li>
            <a href="" className="link">
              FAQ
            </a>
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
