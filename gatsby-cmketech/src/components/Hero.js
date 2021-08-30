import React from "react";
import IntroCopy from "./IntroCopy";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = ({hero}) => {

    const data = hero.wpPage.Pages_CF;
    const placeholderImage = getImage(data.heroImage.sourceUrl);

    return (
        <>
        <div className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster={placeholderImage}>
                    <source src={data.heroVideo} type="video/mp4" />
                    <source src={data.heroVideo} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <div dangerouslySetInnerHTML={ {__html:  data.heroText } } />
                    <h3 dangerouslySetInnerHTML={ {__html: data.heroSubText} } ></h3>
                </div>
            </div>
        </div>
        <IntroCopy heroModifier={true} intro={data} />
        </>
    )
}

export default Hero;