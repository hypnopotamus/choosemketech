import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ProfileHero from "../components/ProfileHero";

const CompanyProfile = () => {

  return (
    <Layout>
        <Seo title="Company Profile" />
        <ProfileHero />
        <div className="container">
          <div className="row">
            <div className="col sidebar">
            </div>
            <div className="col content">
              <h1>Welcome <span data-ms-member="company-name"></span>!</h1>
            </div>
          </div>
        </div>
    </Layout>
  )

}
  
export default CompanyProfile;
  