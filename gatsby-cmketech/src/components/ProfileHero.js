import React from "react"
import ImageDefault from "../assets/images/default-hero-bg.jpg"
import logoDefault from "../assets/images/company-profile-placeholder.png"

const ProfileHero = ({ profile }) => {
  const logoBgColor = {
    backgroundColor: profile["logo-background-color"],
  }

  const imageBgColor = {
    backgroundColor: profile["background-color"],
  }

  let backgroundImage, logoImage

  if (profile.logo) {
    logoImage = <img src={profile.logo} alt={profile["company-name"]} />
  } else {
    logoImage = <img src={logoDefault} alt={profile["company-name"]} />
  }

  if (profile["background-image"]) {
    backgroundImage = <img src={profile["background-image"]} alt={profile["company-name"]} />
  } else {
    backgroundImage = <img src={ImageDefault} alt={profile["company-name"]} />
  }

  return (
    <div className="profile-hero">
      <div className="row">
        <div className="profile-hero--banner" style={imageBgColor}>
          {backgroundImage}
        </div>
        <div className="profile-hero--logo" style={logoBgColor}>
          {logoImage}
        </div>
      </div>
    </div>
  )
}

export default ProfileHero
