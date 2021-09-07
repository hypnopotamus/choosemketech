import React from "react"
import { Link } from "gatsby"

const CompanyProfileSidebar = ({ sidebar }) => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <h3>Company</h3>
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
            <h3>Your Account</h3>
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
