import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import { useBreadcrumb } from 'gatsby-plugin-breadcrumb'
import ImageCopy from "../components/ImageCopy";
import Accordion from "../components/Accordion";
import SubHero from "../components/SubHero";

const Help = ({location}) => {
  const data = useStaticQuery(graphql`
    query HelpQuery {
      wpPage(databaseId: {eq: 16}) {
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
        Help_CF {
          subHeroTitle
          subHeroContent
          subHeroSubTitle
          subHeroImage {
              sourceUrl
          }
          cardHeaderText
          cardCollectionHelp {
            title
            linkUrl
            linkLabel
            buttonUrl
            buttonLabel
            content
            featured
            image {
              altText
              sourceUrl
            }
          }
          accordionCandidateHeadline
          helpCandidateAccordions {
            accordionTitle
            accordionContent
          }
          accordionEmployerHeadline
          helpEmployerAccordions {
            accordionContent
            accordionTitle
          } 
        }
      }
    }
  `)

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: 'Help'
  })  
  const seoData = data.wpPage.seo;
  const featuredImage = data.wpPage.featuredImage.node.link;
  let Help = data.wpPage.Help_CF;
  
  return (
    <Layout>
        <Seo 
          title={seoData.title}
          description={seoData.metaDesc}
          uri={seoData.canonical}
          socialImage={featuredImage} />
        <Breadcrumbs crumbs={crumbs} />
        <SubHero hero={Help} />
        <div className="container">
          <ImageCopy 
            cards={Help.cardCollectionHelp}
            title={Help.cardHeaderText}
          />
          <Accordion 
            items={Help.helpCandidateAccordions}
            headline={Help.accordionCandidateHeadline}
          />
          <Accordion 
            items={Help.helpEmployerAccordions}
            headline={Help.accordionEmployerHeadline}
          />
        </div>

    </Layout>
  )
  
}
  
export default Help;
  