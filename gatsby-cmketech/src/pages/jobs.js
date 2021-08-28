import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Hero from "../components/Hero";

const Jobs = () => {

  return (
    <Layout>
        <Seo title="Jobs Page" />
        <div className="container">
          <h1>Explore tech companies in Milwaukee</h1>
          <Cards />
        </div>
    </Layout>
  )

}
  
export default Jobs;
  