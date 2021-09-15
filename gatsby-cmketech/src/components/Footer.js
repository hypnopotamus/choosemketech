import React from "react"
import { Link } from "gatsby"
import Subscribe from "./Subscription"
import { useFooterMenuQuery } from "../hooks/useFooterMenuQuery"

const Footer = () => {
  const { wpMenu } = useFooterMenuQuery()

  console.log(wpMenu)

  return (
    <footer className="container">
      <div className="footer--social">
        <div className="footer--social__wrapper">
          <h4>Stay Connected</h4>
          <div className="footer--social__icons">
            <a href="https://www.linkedin.com/company/mketech/" target="_blank">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="http://mke-slack.herokuapp.com/" target="_blank">
              <i className="fab fa-slack"></i>
              <span>Slack</span>
            </a>
            <a href="https://twitter.com/MKETechHub" target="_blank">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="https://www.facebook.com/mketechhub/" target="_blank">
              <i className="fab fa-facebook-f"></i>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/mketechhubcoalition/" target="_blank">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer--main container">
        <div className="footer--main__wrapper">
          <ul className="footer--main__subscribe">
            <li>
              <Subscribe />
            </li>
            <li>
              <Link to="/" className="footer--logo desktop">
                <span>MKE Tech</span>
              </Link>
            </li>
          </ul>
          <div className="divider"></div>
          <ul className="footer--main__navigation">
            {wpMenu.menuItems.nodes.map((mainItem) =>
              !mainItem.parentId ? (
                <li key={mainItem.id}>
                  <p>
                    <strong>{mainItem.label}</strong>
                  </p>
                  <ul>
                    {mainItem.childItems.nodes.map((mainItem, idx) => {
                      return (
                        <li key={mainItem.id}>
                          <Link to={mainItem.url} className={mainItem.cssClasses} target={mainItem.target}>
                            <span>{mainItem.label}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ) : null
            )}
          </ul>
        </div>
        <Link to="/" className="footer--logo mobile">
          <span>MKE Tech</span>
        </Link>
        <p className="footer--copyright">
          &copy; 2021 MKE Tech Hub Coalition. All Rights Reserved. | Visit{" "}
          <a href="https://www.mketech.org" target="_blank">
            mketech.org
          </a>{" "}
          | Photos courtesy of{" "}
          <a href="https://www.visitmilwaukee.org/" target="_blank">
            Visit Milwaukee
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
