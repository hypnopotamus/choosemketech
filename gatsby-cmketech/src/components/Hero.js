import React from "react";
import { Link } from "gatsby";
import IntroCopy from "./IntroCopy";
import { heroVideo, heroVideo2, heroBannerMobile, heroBannerTablet } from "../assets/assets";
import HeroPlaceholder from "../assets/images/hero-placeholder.png";

const Hero = ({}) => {
    return (
        <>
        <div className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster={HeroPlaceholder}>
                    <source src={heroVideo} type="video/mp4" />
                    <source src={heroVideo2} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <h1>Build Your Tech <br /> Career <span>In Milwaukee</span></h1>
                    <h3>CAREERS + CONNECTION</h3>
                </div>
            </div>
        </div>
        <IntroCopy heroModifier={true} />
        </>
    )
}

export default Hero;