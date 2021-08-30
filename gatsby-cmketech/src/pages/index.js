import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";
import JobCarousel from "../components/JobCarousel";
import ImageGrid from "../components/ImageGrid";
import ImageCopy from "../components/ImageCopy";
import ThreeColumn from "../components/ThreeColumn";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      wpPage(databaseId: {eq: 102}) {
        Pages_CF {
          heroSubText
          heroText
          heroVideo
          heroImage {
            sourceUrl
          }
          introTitle
          introSubTitle
          introContent
          subHeroTitle
          subHeroSubTitle
          subHeroImage {
            sourceUrl
          }
          subHeroContent
          subHeroButtonUrl
          subHeroButtonLabel
          gridImages {
            title
            altText
            gridArea
            imagePath {
              sourceUrl
            }
          }
          threeColumnHeaderText
          threeColumnCards {
            content
            link
            linkLabel
            title
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const IndexPageData = data.wpPage.Pages_CF;

  return (
    <Layout>
      <Seo title="Choose MKE Tech" />
      <Hero hero={IndexPageData}/>
      <ThreeColumn 
        columns={IndexPageData.threeColumnCards} 
        title={IndexPageData.threeColumnHeaderText} 
      />
      <div className="container">
        <ImageCopy />
      </div>
      <JobCarousel />
      <div className="container">
        <ImageCopy flip={true} />
      </div>
      <SubHero hero={IndexPageData} />
      <ImageGrid gallery={IndexPageData.gridImages} />
    </Layout>
  )
  
}

export default IndexPage