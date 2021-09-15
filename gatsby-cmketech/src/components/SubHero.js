import React from "react"
import SubIntroCopy from "./SubIntroCopy"

const SubHero = ({ hero }) => {
  const placeholderImage = hero.subHeroImage.sourceUrl

  return (
    <>
      <div className="sub-hero sub-hero--banner">
        <div className="row">
          <img src={placeholderImage} role="presentation" alt="" />
        </div>
        <SubIntroCopy heroModifier={true} intro={hero} />
      </div>
    </>
  )
}

export default SubHero
