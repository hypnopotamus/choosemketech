import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import ComparisonMap from "../components/ComparisonMap";
import ThreeColumn from "../components/ThreeColumn";
import IntroCopy from "../components/SubIntroCopy";
import ImageGrid from "../components/ImageGrid";
import ImageCopy from "../components/ImageCopy";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'

const WhyMilwaukee = ({location}) => {

  const data = useStaticQuery(graphql`
        query WhyMilwakueeQuery {
      wpPage(databaseId: {eq: 25}) {
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
        WhyMilwaukee_CF {
          cardCollectionWmke {
            buttonLabel
            buttonUrl
            featured
            content
            linkLabel
            linkUrl
            title
            image {
              sourceUrl
            }
          }
          gridImagesWmke {
            title
            altText
            gridArea
            imagePath {
              sourceUrl
            }
          }
          cardHeaderText
          subHeroButtonLabel
          subHeroButtonUrl
          subHeroContent
          subHeroSubTitle
          subHeroImage {
            sourceUrl
          }
          subHeroTitle
          tertiaryIntroHeader
          tertiaryIntroSubButtonLabel
          tertiaryIntroSubButtonUrl
          tertiaryIntroSubContent
          tertiaryIntroSubHeader
          backgroundColor
          threeColumnCardsWmke {
            content
            link
            linkLabel
            title
            image {
              sourceUrl
            }
          }
          backgroundColor2
          threeColumnCardsWmke2 {
            content
            title
            linkLabel
            link
            image {
              sourceUrl
            }
          }
          threeColumnContent
          threeColumnHeaderText
          threeColumnContent2
          threeColumnHeaderText2
        }
      }
    }
  `)

  const WhyMKEData = data.wpPage.WhyMilwaukee_CF;
  const seoData = data.wpPage.seo;
  const featuredImage = data.wpPage.featuredImage.node.link;

  let TertiaryIntroData = {
    subHeroTitle : data.wpPage.WhyMilwaukee_CF.tertiaryIntroHeader,
    subHeroSubTitle : data.wpPage.WhyMilwaukee_CF.tertiaryIntroSubHeader,
  };

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Why Milwaukee'
  })  

  return (
    <Layout>
        <Seo 
        title={seoData.title}
        description={seoData.metaDesc}
        uri={seoData.canonical}
        socialImage={featuredImage} />
        <Breadcrumbs crumbs={crumbs} />
        <SubHero hero={WhyMKEData} />
        {/* <ComparisonMap /> */}
        <ThreeColumn 
          columns={WhyMKEData.threeColumnCardsWmke} 
          title={WhyMKEData.threeColumnHeaderText}
          content={WhyMKEData.threeColumnContent} 
          background={WhyMKEData.backgroundColor}
        />
        <ThreeColumn 
          columns={WhyMKEData.threeColumnCardsWmke2} 
          title={WhyMKEData.threeColumnHeaderText2}
          background={WhyMKEData.backgroundColor2}
        />
        <div className="container">
          <ImageCopy 
            cards={WhyMKEData.cardCollectionWmke}
            title={WhyMKEData.cardHeaderText}
          />
        </div>
        <IntroCopy intro={TertiaryIntroData}/>
        <ImageGrid gallery={WhyMKEData.gridImagesWmke} />
    </Layout>
  )
  
}
  
export default WhyMilwaukee;