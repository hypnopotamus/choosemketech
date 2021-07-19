import React from "react"
import { Link } from "gatsby"

const Footer = ({}) => {
  return (
    <footer>
    <div className="footer--social">
        <div className="footer--social__wrapper">
          <h4>Stay Connected</h4>
          <div className="footer--social__icons">
              <Link to="https://www.linkedin.com/company/mketech/" target="_blank"><i className="fab fa-linkedin-in"></i><span>LinkedIn</span></Link>
              <Link to="http://mke-slack.herokuapp.com/" target="_blank"><i className="fab fa-slack"></i><span>Slack</span></Link>
              <Link to="https://twitter.com/MKETechHub" target="_blank"><i className="fab fa-twitter"></i><span>Twitter</span></Link>
              <Link to="https://www.facebook.com/mketechhub/" target="_blank"><i className="fab fa-facebook-f"></i><span>Facebook</span></Link>
              <Link to="https://www.instagram.com/mketechhubcoalition/" target="_blank"><i className="fab fa-instagram"></i><span>Instagram</span></Link>
          </div>
        </div>
    </div>
    <div className="footer--main">
      <ul className="footer--main__subscribe">
        <li>
          <p><strong>Stay In The Loop</strong></p>
          <form>
            <input type="text" />
            <label>SIGN UP</label>
          </form>
        </li>
        <li>
          <Link to="/" className="footer--logo">
            <span>MKE Tech</span>
          </Link>
        </li>
      </ul>
      <ul className="footer--main__navigation">
          <li>
            <p><strong>About</strong></p>
            <ul>
                <li><Link to="/"><span>About Choose MKE Tech</span></Link></li>
                <li><Link to="/"><span>MKE Tech Collition <i className="fas fa-external-link-square-alt"></i></span></Link></li>
                <li><Link to="/"><span>Reverse Pitch MKE <i className="fas fa-external-link-square-alt"></i></span></Link></li>
                <li><Link to="/"><span>RPM: High School Edition <i className="fas fa-external-link-square-alt"></i></span></Link></li>
            </ul>
          </li>
          <li>
            <p><strong>Help</strong></p>
            <ul>
                <li><Link to="/"><span>Contact Us</span></Link></li>
                <li><Link to="/"><span>FAQ</span></Link></li>
            </ul>
          </li>
          <li>
            <p><strong>Legal</strong></p>
            <ul>
                <li><Link to="/"><span>Term of Use</span></Link></li>
                <li><Link to="/"><span>Accessibility</span></Link></li>
                <li><Link to="/"><span>Privacy Policy</span></Link></li>
            </ul>
          </li>
      </ul>
      <p>&copy; MKE Tech Hub Collition. All Rights Reserved. | Visit mketech.org | Photo courtsey of Vist Milawukee</p>
    </div>            
    </footer>
    // <footer id="site-footer" role="contentinfo" className="header-footer-group">
    //   <div className="section-inner">
    //     <div className="footer-credits">
    //       <p className="footer-copyright">
    //         © {new Date().getFullYear()}{" "}
    //         <Link to={"/"}>Gatsby Starter WordPress Twenty Twenty</Link>
    //       </p>
    //       <p>
    //         <a
    //           className="powered-by-wordpress"
    //           href="https://www.henrikwirth.com"
    //           rel="noreferrer noopener"
    //         >
    //           Proudly presented by Henrik Wirth
    //         </a>
    //       </p>
    //     </div>

    //     <a className="to-the-top" href="#site-header">
    //       <span className="to-the-top-long">
    //         To the top{" "}
    //         <span className="arrow" aria-hidden="true">
    //           ↑
    //         </span>
    //       </span>
    //       <span className="to-the-top-short">
    //         Up{" "}
    //         <span className="arrow" aria-hidden="true">
    //           ↑
    //         </span>
    //       </span>
    //     </a>
    //   </div>
    // </footer>
  )
}

export default Footer
