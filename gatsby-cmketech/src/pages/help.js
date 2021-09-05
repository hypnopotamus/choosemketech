import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const Help = ({location}) => {

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Help'
  })  
  
  return (
    <Layout>
        <Seo title="Help Page" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container">
          <h1>Help</h1>
        </div>
    </Layout>
  )
  
}
  
export default Help;
  