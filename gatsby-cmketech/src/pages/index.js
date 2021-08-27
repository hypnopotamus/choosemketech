import React from "react";
import { graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import JobCarousel from "../components/JobCarousel";
import ImageGrid from "../components/ImageGrid";
import ImageCopy from "../components/ImageCopy";
import ThreeColumn from "../components/ThreeColumn";

const IndexPage = ({data}) => {
  console.log(data)
  
  return (
    <Layout>
      <Seo title="Choose MKE Tech" />
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

export const query = graphql`
  query HeroPageQuery {
    wpPage {
        Pages_CF {
            heroText
        }
    }
  }
`


export default IndexPage