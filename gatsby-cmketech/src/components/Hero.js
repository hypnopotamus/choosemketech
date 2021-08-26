import React from "react";
import IntroCopy from "./IntroCopy";
import { useHeroQuery } from "../hooks/useHeroQuery";

const Hero = () => {
    const { 
        wpPage : { Pages_CF: data },
    } = useHeroQuery() 
    
    const placeholderImage = data.heroImage.sourceUrl;

    const heroText = data.heroText;
    const heroSubText = data.heroSubText;
    const heroTextMinusP = heroText.replace(/<p>/g, '').replace(/<\/p>/g, '');

    return (
        <>
        <div className="hero hero--banner container">
            <div className="row">
                <video autoPlay={true} className="hero--banner__video" loop="yes" muted="yes" poster={placeholderImage}>
                    <source src={data.heroVideo} type="video/mp4" />
                    <source src={data.heroVideo} type="video/webm" />
                </video>
                <div className="hero--banner__copy">
                    <h1 dangerouslySetInnerHTML={ {__html: heroTextMinusP} } />
                    <h3 dangerouslySetInnerHTML={ {__html: heroSubText} } ></h3>
                </div>
            </div>
        </div>
        <IntroCopy heroModifier={true} />
        </>
    )
}

export default Hero;