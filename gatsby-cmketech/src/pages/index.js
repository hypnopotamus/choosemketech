import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import JobCarousel from "../components/JobCarousel";
import ImageGrid from "../components/ImageGrid";
import ImageCopy from "../components/ImageCopy";
import ThreeColumn from "../components/ThreeColumn";
import IntroCopy from "../components/IntroCopy";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeroPageQuery {
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
            altText
            gridArea
            imagePath {
              sourceUrl
            }
            title
          }
          threeColumnCards {
            content
            link
            linkLabel
            title
            image {
              sourceUrl
            }
          }
          threeColumnHeaderText
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <Seo title="Choose MKE Tech" />
      <Hero hero={data}/>
      <IntroCopy intro={data} />
      <ThreeColumn columns={data} />
      <div className="container">
        <ImageCopy />
      </div>
      <JobCarousel />
      <div className="container">
        <ImageCopy flip={true} />
      </div>
      <ImageGrid gallery={data} />
    </Layout>
  )
  
}

export default IndexPage