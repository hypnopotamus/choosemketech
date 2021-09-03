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

    return (
        <Layout>
            <Seo title="Lead" />
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
