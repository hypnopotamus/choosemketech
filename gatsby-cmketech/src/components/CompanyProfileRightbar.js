import React from "react"
import { Link } from "gatsby"

const CompanyProfileRightbar = ({ rightbar }) => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li className="phone">
            <i className="fas fa-phone-alt"></i> <span>{rightbar["phone-number"]}</span>
          </li>
          <li>
            <i className="fab fa-linkedin-in"></i>{" "}
            <a href="" className="link">
              {rightbar.linkedin}
            </a>
          </li>
          <li>
            <i className="fab fa-facebook-f"></i>{" "}
            <a href="" className="link">
              {rightbar.facebook}
            </a>
          </li>
          <li>
            <i className="fab fa-twitter"></i>{" "}
            <a href="" className="link">
              {rightbar.twitter}
            </a>
          </li>
          <li>
            <Link to="/contact" className="button button--primary">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default CompanyProfileRightbar
