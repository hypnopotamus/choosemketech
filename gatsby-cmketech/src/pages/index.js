import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import JobCarousel from "../components/JobCarousel";
import ImageGrid from "../components/ImageGrid";
import ImageCopy from "../components/ImageCopy";
import ThreeColumn from "../components/ThreeColumn";

const IndexPage = () => {

  return (
    <Layout>
      <Seo />
      <Hero />
      <ThreeColumn />
      <div className="container">
        <ImageCopy />
      </div>
      <JobCarousel />
      <div className="container">
        <ImageCopy flip={true} />
      </div>
      <ImageGrid />
    </Layout>
  )
  
}

export default IndexPage