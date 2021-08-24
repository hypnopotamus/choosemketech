import React from "react";
import { useHeroQuery } from "../hooks/useProfileHeroQuery";

const ProfileHero = () => {

    return (
        <div className="profile-hero">
            <div className="row">
                <div className="profile-hero--banner">
                    <img src="https://picsum.photos/id/171/1500/1000" />
                </div>
                <div className="profile-hero--logo">
                    <img src="https://picsum.photos/282" />
                </div>
            </div>
        </div>
    )

}

export default ProfileHero