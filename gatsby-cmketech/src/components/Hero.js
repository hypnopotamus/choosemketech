import React from "react";
import IntroCopy from "./IntroCopy";

const Hero = ({hero}) => {

    const placeholderImage = hero.heroImage.sourceUrl;

    return (
        <>
        <div className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster={placeholderImage}>
                    <source src={hero.heroVideo} type="video/mp4" />
                    <source src={hero.heroVideo} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <div dangerouslySetInnerHTML={ {__html:  hero.heroText } } />
                    <h3 dangerouslySetInnerHTML={ {__html: hero.heroSubText} } ></h3>
                </div>
            </div>
        </div>
        <IntroCopy heroModifier={true} intro={hero} />
        </>
    )
}

export default Hero;