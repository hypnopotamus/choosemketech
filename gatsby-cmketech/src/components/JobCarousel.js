import React from "react";
import Slider from "react-slick";
import { Link } from "gatsby"
import { render } from "react-dom";

const JobCarousel = ({}) => {
    
    var settings = {
        dots: true
    };
    
    return (
        <Slider className="job-carousel" {...settings}>
            <div className="job-carousel-item">
                <div className="card job-card featured">
                    <div className="job-card--left">
                        <h3>Software Engineer</h3>
                        <p>The Software Engineer is responsible for architecture, design and development of software to include requirements analysis, software design, coding, software integration, testing, debug, and maintenance. The Software Engineer is responsible for independently working on a project under the day-to-day… supervision of an nvisia Project Manager.</p>
                        <div className="job-card--left__tags">
                        <span className="tag tag--green tag--green--data">HR/Admin</span>
                        <span className="tag tag--green tag--green--sales">Sales</span>
                        <span className="tag tag--blue tag--blue--education">Education</span>
                        <span className="tag tag--blue tag--blue--nonprofit">Nonprofit</span>
                        <span className="tag tag--gold tag--gold--featured">HR/Admin</span>
                        </div>
                        <div className="job-card--left__date">
                            <span>Posted 24 hours ago</span>
                        </div>
                    </div>
                    <div className="job-card--right">
                        <div className="job-card--right__details">
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                        </div>
                        <div className="job-card--right__cta">
                            <a className="button button--external button--primary">Apply For Jobs</a>
                            <a className="link">View Company Profile</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-carousel-item">
                <div className="card company-card featured">
                    <div className="company-card--left">
                        <img src="https://via.placeholder.com/225x125" />
                    </div>
                    <div className="company-card--center">
                        <h3>Company Name</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no…
                        </p>
                        <div className="company-card--center__details">
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                        </div>
                    </div>
                    <div className="company-card--right">
                    <div className="company-card--right__details">
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                            <h5><i className="fas fa-building"></i> Company Name</h5>
                        </div>
                        <a className="button button--primary" href="/">View Profile</a>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default JobCarousel