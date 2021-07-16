import React from "react";
import { Link } from "gatsby";
import { heroVideo, heroVideo2 } from "../assets/assets";

const Hero = ({}) => {
    return (
        <section className="hero">
            <video autoPlay="true" id="heroVideo" loop="yes" muted="yes" poster="images/hero-placeholder.png">
                <source src={heroVideo} type="video/mp4" />
                <source src={heroVideo2} type="video/webm" />
                <source src="videos/hero.ogv" type="video/ogv" />
            </video>
            <div className="hero--content">
                <h1>Build Your Tech <br /> Career In <span>Milwaukee, WI</span></h1>
                <p>CAREERS + CONNECTION</p>
            </div>
            <span>test</span>
        </section>
    )
}

export default Hero
