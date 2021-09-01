import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const RecruitWithUs = () => {

  return (
    <Layout>
        <Seo title="Pricing Page" />
        <div className="container">
          <h1>Pricing Page</h1>
          <br />
          <table>
            <thead>
              <th><a href="#/ms/signup/60e6fb7305ad7e00048129c9" className="button button--secondary">Entry</a></th>
              <th><a href="#/ms/signup/60e7014e9a642e000469aee9" className="button button--secondary">Base</a></th>
              <th><a href="#/ms/signup/611f2f880c5af90004207432" className="button button--primary">Free</a></th>
              <th><a href="#/ms/signup/60e7015d824c41000428595f" className="button button--secondary">Enhanced</a></th>
              <th><a href="#/ms/signup/60e7016d824c410004285960" className="button button--secondary">Premium</a></th>
            </thead>
          </table>
        </div>
    </Layout>
  )

}
  
export default RecruitWithUs;
  