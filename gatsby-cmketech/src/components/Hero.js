import React from "react";
import IntroCopy from "./IntroCopy";
import { heroVideo, heroVideo2, heroBannerMobile, heroBannerTablet } from "../assets/assets";
import HeroPlaceholder from "../assets/images/hero-placeholder.png";
import { useHeroQuery } from "../hooks/useHeroQuery";
import { getImage } from "gatsby-plugin-image";


const Hero = () => {
    const { 
        wpPage : { LandingPage_CF: data }, 
    } = useHeroQuery() 
    
    const placeholderImage = data.heroImage.sourceUrl;


    return (
        <>
        <div className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster={placeholderImage}>
                    <source src={data.heroVideo} type="video/mp4" />
                    <source src={data.heroVideo} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <h1>{data.heroText}</h1>
                    <h3>{data.heroSubText}</h3>
                </div>
            </div>
        </div>
        <IntroCopy heroModifier={true} />
        </>
    )
}

export default Hero;