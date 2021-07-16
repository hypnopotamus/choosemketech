import React from "react";
import { Link } from "gatsby";
import { heroVideo, heroVideo2, heroBannerMobile, heroBannerTablet } from "../assets/assets";

const Hero = ({}) => {
    return (
        <section className="hero--banner--container">
            <video autoPlay="true" id="heroVideo" loop="yes" muted="yes" poster="images/hero-placeholder.png">
                <source src={heroVideo} type="video/mp4" />
                <source src={heroVideo2} type="video/webm" />
                <source src="videos/hero.ogv" type="video/ogv" />
            </video>
            <img src={heroBannerMobile} alt="skyline of Milwaukee" />
            <img id="hero--tablet" src={heroBannerTablet} alt="views of Milwaukee" />
            <div className="hero--copy">
                <h1>Build Your Tech <br /> Career In <span>Milwaukee, WI</span></h1>
                <h3>CAREERS + CONNECTION</h3>
            </div>
        </section>
    )
}

export default Hero;