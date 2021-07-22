import React from "react"

const Cards = ({}) => {
  return (
    <div className="container cards">
      <div className="card job-card job-card--featured">
        <div className="job-card__left">
          <div className="job-card__left__heading">
            <h3>Software Engineer</h3>
            <h4>at nvisia</h4>
          </div>
          <p>
            The Software Engineer is responsible for architecture, design and
            development of software to include requirements analysis, software
            design, coding, software integration, testing, debug, and
            maintenance. The Software Engineer is responsible for independently
            working on a project under the day-to-day… supervision of an nvisia
            Project Manager.
          </p>
          <div className="job-card__left__tags">
            <span className="tag tag--green tag--green--data">HR/Admin</span>
            <span className="tag tag--green tag--green--sales">Sales</span>
            <span className="tag tag--blue tag--blue--education">
              Education
            </span>
            <span className="tag tag--blue tag--blue--nonprofit">
              Nonprofit
            </span>
            <span className="tag tag--gold tag--gold--featured">HR/Admin</span>
          </div>
          <div className="job-card__left__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
          <div className="job-card__left__date">
            <span>Posted 24 hours ago</span>
          </div>
        </div>
        <div className="job-card__right">
          <div className="job-card__right__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
          <div className="job-card__right__cta">
            <a className="button button--external button--primary">
              Apply For Jobs
            </a>
            <a className="link">View Company Profile</a>
          </div>
        </div>
      </div>

      <div className="card company-card company-card--minimal ">
        <div className="company-card__left">
          <img src="https://via.placeholder.com/225x125" />
        </div>
        <div className="company-card__center">
          <h3>Company Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no…
          </p>
          <div className="company-card__center__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
        </div>
        <div className="company-card__right">
          <a className="button button--primary" href="/">
            View Profile
          </a>
        </div>
      </div>

      <div className="card company-card">
        <div className="company-card__left">
          <img src="https://via.placeholder.com/225x125" />
        </div>
        <div className="company-card__center">
          <h3>Company Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no…
          </p>
          <div className="company-card__center__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
        </div>
        <div className="company-card__right">
          <a className="button button--primary" href="/">
            View Profile
          </a>
        </div>
      </div>

      <div className="card company-card company-card--featured">
        <div className="company-card__left">
          <img src="https://via.placeholder.com/225x125" />
        </div>
        <div className="company-card__center">
          <h3>Company Name</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no…
          </p>
          <div className="company-card__center__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
          <div className="company-card__center__listing">
            <h5>
              <span>09</span> Perks
            </h5>
            <h5>
              <span>25</span> Jobs
            </h5>
          </div>
          <div className="company-card__center__hiring">
            <span>Hiring Now</span>
          </div>
        </div>
        <div className="company-card__right">
          <div className="company-card__right__details">
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
            <h5>
              <i className="fas fa-building"></i> Company Name
            </h5>
          </div>
          <a className="button button--primary" href="/">
            View Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards
