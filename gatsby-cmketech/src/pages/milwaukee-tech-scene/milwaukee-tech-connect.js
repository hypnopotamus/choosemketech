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
    Connect_CF {
      subHeroTitle
      subHeroSubTitle
      subHeroContent
      subHeroImage {
        sourceUrl
      }
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

return (
  <Layout>
      <Seo title="Connect" />
      <SubHero hero={Connect} />
      <div className="container">
      <ImageCopy
          cards={Connect.cardCollectionConnect}
          title={Connect.headerText} 
      />

      <Accordion 
          items={Connect.connectAccordions} 
      />
      </div>
  </Layout>
)
}
  
export default Connect;
  