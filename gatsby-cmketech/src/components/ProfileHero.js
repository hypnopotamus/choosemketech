import React from "react";

const ProfileHero = ({profile}) => {

    // const logoBgColor = {
    //     backgroundColor : profile['logo-background-color']
    // }

    // const imageBgColor = {
    //     backgroundColor : profile['background-color']
    // }

    let backgroundImage,
        logoImage

    if(profile.logo) {
        logoImage = <img src={profile.logo} alt={profile['company-name']} />
    }
    
    if(profile['background-image']) {
        backgroundImage = <img src={profile['background-image']} alt={profile['company-name']} />
    }

    console.log(profile)
        
    return (
        <div className="profile-hero">
            <div className="row">
                <div className="profile-hero--banner">
                    { backgroundImage }
                </div>
                <div className="profile-hero--logo">
                    { logoImage }
                </div>
            </div>
        </div>
    )
}

export default ProfileHero