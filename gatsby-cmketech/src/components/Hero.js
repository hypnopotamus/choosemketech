import React from "react";

const Hero = ({hero}) => {

    const data = hero.wpPage.Pages_CF;
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
                    <div dangerouslySetInnerHTML={ {__html:  data.heroText } } />
                    <h3 dangerouslySetInnerHTML={ {__html: data.heroSubText} } ></h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;