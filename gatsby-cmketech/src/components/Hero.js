import React from "react";
import { Link } from "gatsby";
import { heroVideo, heroVideo2 } from "../assets/assets";

const Hero = ({}) => {
    return (
        <section className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster="images/hero-placeholder.png">
                    <source src={heroVideo} type="video/mp4" />
                    <source src={heroVideo2} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <h1>Build Your Tech <br /> Career <span>In Milwaukee</span></h1>
                    <h3>CAREERS + CONNECTION</h3>
                </div>
            </div>
        </section>
    )
}

export default Hero;