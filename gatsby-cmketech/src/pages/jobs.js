import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const Jobs = ({location}) => {

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Jobs'
  })  
  
  return (
    <Layout>
        <Seo title="Jobs Page" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container">
          <h1>Explore tech companies in Milwaukee</h1>
          <Cards />
        </div>
    </Layout>
  )

}
  
export default Jobs;
  