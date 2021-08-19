import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Cards from "../components/Cards";

const Jobs = () => (
    <Layout>
        <Seo title="Jobs Page" />
        <div className="container">
          <Cards />
        </div>
    </Layout>
  )
  
export default Jobs;
  