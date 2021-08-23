import React from "react";
import { useHeroQuery } from "../hooks/useProfileHeroQuery";

const ProfileHero = () => {

    return (
        <div className="profile-hero">
            <div className="row">
                <div className="profile-hero--banner">
                    <img src="https://source.unsplash.com/random/615" />
                </div>
                <div className="profile-hero--logo">
                    <img src="https://picsum.photos/282" />
                </div>
            </div>
        </div>
    )

}

export default ProfileHero