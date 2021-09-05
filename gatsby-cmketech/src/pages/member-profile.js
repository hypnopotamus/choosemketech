import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ProfileHero from "../components/ProfileHero";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const MemberProfile = ({location}) => {

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Member Profile'
  })  

  return (
    <Layout>
        <Seo title="Member Profile" />
        <Breadcrumbs crumbs={crumbs} />
        {/* <ProfileHero /> */}
        <div className="container">
          <h1>Welcome Back <span data-ms-member="first-name"></span>!</h1>
        </div>
    </Layout>
  )

}
  
export default MemberProfile;
  