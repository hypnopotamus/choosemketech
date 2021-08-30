import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import ThreeColumn from "../../components/ThreeColumn";
import IntroCopy from "../../components/IntroCopy";

const TechScene = () => {
  
  const data = useStaticQuery(graphql`
    query MKETechSceneQuery {
      wpPage(databaseId: {eq: 31}) {
        MilwaukeeTechScene_CF {
          threeColumnHeaderText
          threeColumnCards {
            title
            content
            linkLabel
            link
            image {
              sourceUrl
            }
          }
          introTitle
          introSubTitle
          introContent
          miniHeroImage {
            sourceUrl
          }
        }
      }      
    }
  `)

  const TechPageData = data.wpPage.MilwaukeeTechScene_CF;

  console.log(TechPageData)
  
  return (
    <Layout>
        <Seo title="Tech Scene Page" />
        <IntroCopy intro={TechPageData} />
        <ThreeColumn columns={TechPageData} />
        <div className="container">
          <h1>Tech Scene Page</h1>
        </div>
    </Layout>
  )

}
  
export default TechScene;
  