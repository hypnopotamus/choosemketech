import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import ImageCopy from "../components/ImageCopy";
import SubHero from "../components/SubHero";

const About = () => {
  const data = useStaticQuery(graphql`
  query AboutCFQuery {
    wpPage(databaseId: {eq: 52}) {
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

  return (
    <Layout>
        <Seo title="About" />
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