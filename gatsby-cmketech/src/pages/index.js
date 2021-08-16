import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import JobCarousel from "../components/JobCarousel";
import ImageGrid from "../components/ImageGrid";
import Cards from "../components/Cards";
import Accordion from "../components/Accordion";
import CommunityListing from "../components/CommunityListing";
import ImageCopy from "../components/ImageCopy";
import ThreeColumn from "../components/ThreeColumn";

const IndexPage = () => (
  <Layout>
    <Seo title="Home Page" />
    <Hero />

    <div className="container">
      <Cards />
      <ImageGrid />
      <Accordion />
      <ImageCopy />
    </div>
    <ThreeColumn />
    <JobCarousel />
    <CommunityListing />    
  </Layout>
)

export default IndexPage