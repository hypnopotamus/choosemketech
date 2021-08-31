import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import ComparisonMap from "../components/ComparisonMap";

const WhyMilwaukee = () => {

  const data = useStaticQuery(graphql`
    query WhyMilwaukeeQuery {
      wpPage(databaseId: {eq: 25}) {
        WhyMilwaukee_CF {
          subHeroTitle
          subHeroSubTitle
          subHeroContent
          subHeroButtonUrl
          subHeroButtonLabel
          subHeroImage {
            sourceUrl
          }
        }
      }
    }

  `)

  const WhyMKEData = data.wpPage.WhyMilwaukee_CF;

  console.log(WhyMKEData)

  return (
    <Layout>
        <Seo title="Why Milwaukee Page" />
        <SubHero hero={WhyMKEData} />
        <ComparisonMap />
        {/* <ThreeColumn 
          columns={TechPageData.threeColumnCardsMts} 
          title={TechPageData.threeColumnHeaderText} 
        /> */}
        <div className="container">
        </div>
    </Layout>
  )
  
}
  
export default WhyMilwaukee;