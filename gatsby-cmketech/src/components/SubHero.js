import React from "react";
import SubIntroCopy from "./SubIntroCopy";

const SubHero = ({hero}) => {

    const placeholderImage = hero.subHeroImage.sourceUrl;

    return (
        <>
        <div className="sub-hero sub-hero--banner">
            <div className="row">
                <img src={placeholderImage} />
            </div>
            <SubIntroCopy heroModifier={true} intro={hero} />
        </div>
        </>
    )
}

export default SubHero;