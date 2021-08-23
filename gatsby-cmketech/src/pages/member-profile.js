import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ProfileHero from "../components/ProfileHero";

const MemberProfile = () => {

  return (
    <Layout>
        <Seo title="Member Profile" />
        <ProfileHero />
        <div className="container">
          <h1>Member Profile</h1>
        </div>
    </Layout>
  )

}
  
export default MemberProfile;
  