import React from "react"
import Slider from "react-slick"
import { Link } from "gatsby"
import { render } from "react-dom"

const JobCarousel = ({}) => {
  var settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className="job-carousel">
      <div className="container">
        <div className="job-carousel__header">
          <h2>Header</h2>
        </div>
        <Slider className="job-carousel__slider" {...settings}>
          <div className="job-carousel-item">
            <div className="card job-card job-card--featured">
              <div className="job-card__left">
                <div className="job-card__left__heading">
                  <h3>Software Engineer</h3>
                  <h4>at nvisia</h4>
                </div>
                <p>
                  The Software Engineer is responsible for architecture, design
                  and development of software to include requirements analysis,
                  software design, coding, software integration, testing, debug,
                  and maintenance. The Software Engineer is responsible for
                  independently working on a project under the day-to-day…
                  supervision of an nvisia Project Manager.
                </p>
                <div className="job-card__left__tags">
                  <span className="tag tag--green tag--green--data">
                    Data/Analytics
                  </span>
                  <span className="tag tag--blue tag--blue--finance">
                    Finance/Insurance
                  </span>
                  <span className="tag tag--gold tag--gold--featured">
                    Featured
                  </span>
                </div>
                <div className="job-card__left__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
                  </h5>
                </div>
                <div className="job-card__left__date">
                  <span>Posted 24 hours ago</span>
                </div>
              </div>
              <div className="job-card__right">
                <div className="job-card__right__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
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
          </div>
          <div className="job-carousel-item">
            <div className="card job-card job-card--featured">
              <div className="job-card__left">
                <div className="job-card__left__heading">
                  <h3>Software Engineer</h3>
                  <h4>at nvisia</h4>
                </div>
                <p>
                  The Software Engineer is responsible for architecture, design
                  and development of software to include requirements analysis,
                  software design, coding, software integration, testing, debug,
                  and maintenance. The Software Engineer is responsible for
                  independently working on a project under the day-to-day…
                  supervision of an nvisia Project Manager.
                </p>
                <div className="job-card__left__tags">
                  <span className="tag tag--green tag--green--data">
                    Data/Analytics
                  </span>
                  <span className="tag tag--blue tag--blue--finance">
                    Finance/Insurance
                  </span>
                  <span className="tag tag--gold tag--gold--featured">
                    Featured
                  </span>
                </div>
                <div className="job-card__left__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
                  </h5>
                </div>
                <div className="job-card__left__date">
                  <span>Posted 24 hours ago</span>
                </div>
              </div>
              <div className="job-card__right">
                <div className="job-card__right__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
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
          </div>
          <div className="job-carousel-item">
            <div className="card job-card job-card--featured">
              <div className="job-card__left">
                <div className="job-card__left__heading">
                  <h3>Software Engineer</h3>
                  <h4>at nvisia</h4>
                </div>
                <p>
                  The Software Engineer is responsible for architecture, design
                  and development of software to include requirements analysis,
                  software design, coding, software integration, testing, debug,
                  and maintenance. The Software Engineer is responsible for
                  independently working on a project under the day-to-day…
                  supervision of an nvisia Project Manager.
                </p>
                <div className="job-card__left__tags">
                  <span className="tag tag--green tag--green--data">
                    Data/Analytics
                  </span>
                  <span className="tag tag--blue tag--blue--finance">
                    Finance/Insurance
                  </span>
                  <span className="tag tag--gold tag--gold--featured">
                    Featured
                  </span>
                </div>
                <div className="job-card__left__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
                  </h5>
                </div>
                <div className="job-card__left__date">
                  <span>Posted 24 hours ago</span>
                </div>
              </div>
              <div className="job-card__right">
                <div className="job-card__right__details">
                  <h5>
                    <i className="fas fa-building"></i> nvisia
                  </h5>
                  <h5>
                    <i className="fas fa-map-marker-alt"></i> Milwaukee, WI
                  </h5>
                  <h5>
                    <i className="fas fa-calendar-alt"></i> Full Time
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
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default JobCarousel
