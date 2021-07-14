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
            <div className="job-carousel-card">
                <h2>1</h2>
                <div className="job-carousel-card--left">
                    <h3>Software Engineer</h3>
                    <p>The Software Engineer is responsible for architecture, design and development of software to include requirements analysis, software design, coding, software integration, testing, debug, and maintenance. The Software Engineer is responsible for independently working on a project under the day-to-day… supervision of an nvisia Project Manager.</p>
                    <div className="job-carousel-card--left__tags">
                    <span className="tag tag--green tag--green--admin">HR/Admin</span>
                    </div>
                    <div className="job-carousel-card--left__date">

                    </div>
                </div>
                <div className="job-carousel-card--right">
                    <div className="job-carousel-card--right__details">

                    </div>
                    <div className="job-carousel-card--right__cta">
                        <a className="button">Apply For Jobs</a>
                        <a className="link">View Company Profile</a>
                    </div>
                </div>
            </div>            
        </Slider>
    )
}

export default JobCarousel