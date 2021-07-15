import React from 'react';
import { heroBannerMobile } from '../assets/images';

const Hero = (props) => {
    return (
        <section className="hero--banner--container">
            <video src="https://f.hubspotusercontent00.net/hubfs/436951/Elite-Home.mp4"
                autoPlay="1" muted="" loop="" />
            <img src={heroBannerMobile} alt="alt text" />
            <div className="hero--large--circle" />
            <div className="hero--small--circle" />
            <div className="hero--white--circle" />
            <div className="hero--copy">
                <h1>Build your Tech Career <span>In Milwaukee</span></h1>
                <h3>Talent + Attraction</h3>
            </div>
        </section>
    );
};

export default Hero;