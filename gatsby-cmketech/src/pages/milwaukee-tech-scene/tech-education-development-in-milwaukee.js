import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import ImageCopy from "../../components/ImageCopy";
import SubHero from "../../components/SubHero";
import Accordion from "../../components/Accordion"

const Grow = () => {
  const data = useStaticQuery(graphql`
  query GrowQuery {
  wpPage(databaseId: {eq: 34}) {
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
    Grow_CF {
      subHeroTitle
      subHeroSubTitle
      subHeroContent
      subHeroImage {
        sourceUrl
      }
      growAccordions {
        accordionTitle
        accordionContent
      }
      cardCollectionGrow {
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

let Grow = data.wpPage.Grow_CF;
const seoData = data.wpPage.seo;
const featuredImage = data.wpPage.featuredImage.node.link;

return (
  <Layout>
      <Seo 
      title={seoData.title}
      description={seoData.metaDesc}
      uri={seoData.canonical}
      socialImage={featuredImage} />
      <SubHero hero={Grow} />
      <div className="container">
      <ImageCopy
          cards={Grow.cardCollectionGrow}
          title={Grow.headerText} 
      />

      <Accordion 
          items={Grow.growAccordions} 
      />
      </div>
  </Layout>
)
}
  
export default Grow;
  