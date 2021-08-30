import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import ThreeColumn from "../../components/ThreeColumn";
import SubHero from "../../components/SubHero";
import ImageGrid from "../../components/ImageGrid";
import IntroCopy from "../../components/SubIntroCopy";

const TechScene = () => {
  
  const data = useStaticQuery(graphql`
    query MKETechSceneQuery {
      wpPage(databaseId: {eq: 31}) {
        MilwaukeeTechScene_CF {
          threeColumnHeaderText
          threeColumnCardsMts {
            title
            content
            linkLabel
            link
            image {
              sourceUrl
            }
          }
          subHeroTitle
          subHeroSubTitle
          subHeroContent
          subHeroButtonUrl
          subHeroButtonLabel
          subHeroImage {
            sourceUrl
          }
          gridImagesMts {
            title
            altText
            gridArea
            imagePath {
              sourceUrl
            }
          }
          tertiaryIntroSubHeader
          tertiaryIntroSubContent
          tertiaryIntroSubButtonUrl
          tertiaryIntroSubButtonLabel
          tertiaryIntroHeader
        }
      }
    }

  `)

  const TechPageData = data.wpPage.MilwaukeeTechScene_CF;
  let TertiaryIntroData = {
    subHeroTitle : data.wpPage.MilwaukeeTechScene_CF.tertiaryIntroHeader,
    subHeroSubTitle : data.wpPage.MilwaukeeTechScene_CF.tertiaryIntroSubHeader,
    subHeroContent : `<p>` + data.wpPage.MilwaukeeTechScene_CF.tertiaryIntroSubContent + `</p>`,
    subHeroButtonUrl : data.wpPage.MilwaukeeTechScene_CF.tertiaryIntroSubButtonUrl,
    subHeroButtonLabel : data.wpPage.MilwaukeeTechScene_CF.tertiaryIntroSubButtonLabel
  };


  console.log(TertiaryIntroData)

  return (
    <Layout>
        <Seo title="Tech Scene Page" />
        <SubHero hero={TechPageData} />
        <ThreeColumn 
          columns={TechPageData.threeColumnCardsMts} 
          title={TechPageData.threeColumnHeaderText} 
        />
        <div className="container">
        </div>
        <IntroCopy intro={TertiaryIntroData}/>
        <ImageGrid gallery={TechPageData.gridImagesMts} />
    </Layout>
  )

}
  
export default TechScene;
  