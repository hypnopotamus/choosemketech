import React from "react";
import IntroCopy from "./IntroCopy";

const SubHero = ({hero}) => {

    const placeholderImage = hero.heroImage.sourceUrl;

    return (
        <>
        <div className="sub-hero sub-hero--banner container">
            <div className="row">
                <img src={placeholderImage} />
            </div>
        </div>
        <IntroCopy heroModifier={true} intro={hero} />
        </>
    )
}

export default SubHero;