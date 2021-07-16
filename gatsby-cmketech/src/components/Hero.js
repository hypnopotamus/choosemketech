import React from "react"
import { Link } from "gatsby"

const Hero = ({}) => {
    return (
        <div className="hero">
            <video autoPlay="" id="heroVideo" loop="yes" muted="yes" poster="images/hero-placeholder.png">
                <source src="videos/hero.mp4" type="video/mp4" />
                <source src="videos/hero.webm" type="video/webm" />
                <source src="videos/hero.ogv" type="video/ogv" />
            </video>
            <div className="hero--content">
                <h1>Build Your Tech <br /> Career In <span>Milwaukee, WI</span></h1>
                <p>CAREERS + CONNECTION</p>
            </div>
            <span>test</span>
        </div>
    )
}

export default Hero
