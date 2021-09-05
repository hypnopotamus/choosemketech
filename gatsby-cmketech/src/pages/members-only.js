import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const MembersOnly = ({location}) => {

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Member\'s Only'
  })  

  return (
    <Layout>
        <Seo title="Members Only" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container">
          <h1>Members Only</h1>
        </div>
    </Layout>
  )

}
  
export default MembersOnly;
  