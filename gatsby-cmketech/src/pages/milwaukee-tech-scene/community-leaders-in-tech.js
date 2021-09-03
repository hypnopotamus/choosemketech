import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "../../components/Seo"
import Layout from "../../components/Layout"
import ImageCopy from "../../components/ImageCopy";
import SubHero from "../../components/SubHero";
import Accordion from "../../components/Accordion"
  

const Lead = () =>{
    const data = useStaticQuery(graphql`
        query LeadQuery {
        wpPage(databaseId: {eq: 703}) {
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
            Lead_CF {
            subHeroTitle
            subHeroContent
            subHeroSubTitle
            subHeroImage {
                sourceUrl
            }
            engageAccordions {
                accordionTitle
                accordionContent
            }
            cardCollectionEngage {
                title
                content
                featured
                image {
                sourceUrl
                }
                buttonUrl
                buttonLabel
                linkUrl
                linkLabel
            }
            }
        }
        }

    `)
  
  let Lead = data.wpPage.Lead_CF;
  const seoData = data.wpPage.seo;
  const featuredImage = data.wpPage.featuredImage.node.link;

    return (
        <Layout>
            <Seo 
            title={seoData.title}
            description={seoData.metaDesc}
            uri={seoData.canonical}
            socialImage={featuredImage} />
            <SubHero hero={Lead} />
            <div className="container">
            <ImageCopy
                cards={Lead.cardCollectionEngage}
                title={Lead.headerText} 
            />

            <Accordion 
                items={Lead.engageAccordions} 
            />
            </div>
        </Layout>
    )
}

export default Lead
