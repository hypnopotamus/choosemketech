import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ImageCopy from "../components/ImageCopy";
import SubHero from "../components/SubHero";

const About = () => {
  const data = useStaticQuery(graphql`
  query AboutCFQuery {
    wpPage(databaseId: {eq: 52}) {
      seo {
        title
        metaDesc
        opengraphTitle
        opengraphDescription
        opengraphType
        canonical
      }
      featuredImage {
        node {
          link
        }
      }
      About_CF {
        subHeroTitle
        subHeroSubTitle
        subHeroContent
        subHeroButtonUrl
        subHeroButtonLabel
        subHeroImage {
          sourceUrl
        }
        headerText
        cardCollectionAbt {
          title
          content
          buttonLabel
          buttonUrl
          featured
          linkLabel
          linkUrl
          image {
            sourceUrl
          }
        }
      }
    }
  }
`)

let About = data.wpPage.About_CF;
let seoData = data.wpPage.seo;
let featuredImage = data.wpPage.featuredImage.node.link;

  return (
    <Layout>
      <Seo 
      title={seoData.title}
      description={seoData.metaDesc}
      uri={seoData.canonical}
      socialImage={featuredImage} />
      <SubHero hero={About} />
      <div className="container">
        <ImageCopy
        cards={About.cardCollectionAbt}
        title={About.headerText} 
        />
      </div>
    </Layout>
  )
  
}
  
export default About;