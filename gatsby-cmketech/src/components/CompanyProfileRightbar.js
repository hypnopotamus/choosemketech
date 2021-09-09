import React from "react"
import { Link } from "gatsby"
import FormInput from "./FormInput"

const CompanyProfileRightbar = ({ rightbar }) => {
  return (
    <>
      <div className="sidebar right">
        <h3>Social Media</h3>
        <ul>
          <li className="phone">
            <FormInput type="textgroup" id="phonenumber" name="phonenumber" icon="fas fa-phone-alt" memberstack="phone-number" />
          </li>
          <li>
            <FormInput type="textgroup" id="linkedin" name="linkedin" icon="fab fa-linkedin-in" memberstack="linkedin" />
          </li>
          <li>
            <FormInput type="textgroup" id="facebook" name="facebook" icon="fab fa-facebook-f" memberstack="facebook" />
          </li>
          <li>
            <FormInput type="textgroup" id="twitter" name="twitter" icon="fab fa-twitter" memberstack="twitter" />
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
