import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const Pricing = () => {

  return (
    <Layout>
        <Seo title="Pricing Page" />
        <div className="container">
          <h1>Pricing Page</h1>
          <ul>
            <li><a href="#/ms/signup/60e6fb7305ad7e00048129c9">Entry</a></li>
            <li><a href="#/ms/signup/60e7014e9a642e000469aee9">Base</a></li>
            <li><a href="#/ms/signup/60e7015d824c41000428595f">Enhanced</a></li>
            <li><a href="#/ms/signup/60e7016d824c410004285960">Premium</a></li>
          </ul>
        </div>
    </Layout>
  )

}
  
export default Pricing;
  