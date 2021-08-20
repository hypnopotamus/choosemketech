import React from "react";
import { graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Cards from "../components/Cards";

const Jobs = () => {
  
  return (
    <Layout>
        
        {/* <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} /> */}

        <div className="container">
          <h1>Explore tech companies in Milwaukee</h1>
          <Cards />
        </div>
    </Layout>
  )

}

export const query = graphql`
  query Jobs($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
  
export default Jobs;
  