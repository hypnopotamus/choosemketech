import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const Companies = ({location}) => {
const { crumbs } = useBreadcrumb({
  location,
  crumbLabel: 'Companies'
})

  return (
    <Layout>
        <Seo title="Companies Page" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="container">
          <h1>Companies Header</h1>
        </div>
    </Layout>
  )
  
}
  
export default Companies;
  