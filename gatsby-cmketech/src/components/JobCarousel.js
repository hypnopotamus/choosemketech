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
                <div className="job-carousel-card">
                    <div className="job-carousel-card--left">
                        <h3>Software Engineer</h3>
                        <p>The Software Engineer is responsible for architecture, design and development of software to include requirements analysis, software design, coding, software integration, testing, debug, and maintenance. The Software Engineer is responsible for independently working on a project under the day-to-day… supervision of an nvisia Project Manager.</p>
                        <div className="job-carousel-card--left__tags">
                        <span className="tag tag--green tag--green--data">HR/Admin</span>
                        <span className="tag tag--green tag--green--sales">Sales</span>
                        <span className="tag tag--blue tag--blue--education">Education</span>
                        <span className="tag tag--blue tag--blue--nonprofit">Nonprofit</span>
                        <span className="tag tag--gold tag--gold--featured">HR/Admin</span>
                        </div>
                        <div className="job-carousel-card--left__date">
                            <span>Posted 24 hours ago</span>
                        </div>
                    </div>
                    <div className="job-carousel-card--right">
                        <div className="job-carousel-card--right__details">
                            <div><i class="fas fa-building"></i> Company Name</div>
                            <div><i class="fas fa-building"></i> Company Name</div>
                            <div><i class="fas fa-building"></i> Company Name</div>
                        </div>
                        <div className="job-carousel-card--right__cta">
                            <button className="button button--secondary">Apply For Jobs</button>
                            <a className="link">View Company Profile</a>
                        </div>
                    </div>
                </div>    
                        
            </div>
            <div className="job-carousel-item">
                <div className="job-carousel-card">
                    <div className="job-carousel-card--left">
                        <h3>Software Engineer</h3>
                        <p>The Software Engineer is responsible for architecture, design and development of software to include requirements analysis, software design, coding, software integration, testing, debug, and maintenance. The Software Engineer is responsible for independently working on a project under the day-to-day… supervision of an nvisia Project Manager.</p>
                        <div className="job-carousel-card--left__tags">
                        <span className="tag tag--green tag--green--data">HR/Admin</span>
                        <span className="tag tag--green tag--green--sales">Sales</span>
                        <span className="tag tag--blue tag--blue--education">Education</span>
                        <span className="tag tag--blue tag--blue--nonprofit">Nonprofit</span>
                        <span className="tag tag--gold tag--gold--featured">HR/Admin</span>
                        </div>
                        <div className="job-carousel-card--left__date">
                            <span>Posted 24 hours ago</span>
                        </div>
                    </div>
                    <div className="job-carousel-card--right">
                        <div className="job-carousel-card--right__details">
                            <div><i class="fas fa-building"></i> Company Name</div>
                            <div><i class="fas fa-building"></i> Company Name</div>
                            <div><i class="fas fa-building"></i> Company Name</div>
                        </div>
                        <div className="job-carousel-card--right__cta">
                            <button className="button button--secondary">Apply For Jobs</button>
                            <a className="link">View Company Profile</a>
                        </div>
                    </div>
                </div>    
                        
            </div>
        </Slider>
    )
}

export default JobCarousel