import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import ImageCopy from "../../components/ImageCopy";
import SubHero from "../../components/SubHero";
import Accordion from "../../components/Accordion"

const Connect = () => {
  const data = useStaticQuery(graphql`
  query ConnectQuery {
  wpPage(databaseId: {eq: 45}) {
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
    Connect_CF {
      subHeroTitle
      subHeroSubTitle
      subHeroContent
      subHeroImage {
        sourceUrl
      }
      accordionHeadline
      connectAccordions {
        accordionTitle
        accordionContent
      }
      cardCollectionConnect {
        title
        content
        featured
        image {
          sourceUrl
        }
        linkUrl
        linkLabel
        buttonUrl
        buttonLabel
      }
    }
  }
  }

`)

let Connect = data.wpPage.Connect_CF;
const seoData = data.wpPage.seo;
const featuredImage = data.wpPage.featuredImage.node.link;

return (
  <Layout>
      <Seo 
      title={seoData.title}
      description={seoData.metaDesc}
      uri={seoData.canonical}
      socialImage={featuredImage} />
      <SubHero hero={Connect} />
      <div className="container">
      <ImageCopy
          cards={Connect.cardCollectionConnect}
          title={Connect.headerText} 
      />

      <Accordion 
          items={Connect.connectAccordions} 
          headline={Connect.accordionHeadline} 
      />
      </div>
  </Layout>
)
}
  
export default Connect;
  