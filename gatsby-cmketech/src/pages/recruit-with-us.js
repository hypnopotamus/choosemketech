import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import ImageCopy from "../components/ImageCopy";
import Memberships from "../components/Memberships";

const RecruitWithUs = () => {
  const data = useStaticQuery(graphql`
    query RecruitWithUsQuery {
      wpPage(databaseId: {eq: 19}) {
        RecruitWithUs_CF {
          subHeroTitle
          subHeroSubTitle
          subHeroContent
          subHeroButtonUrl
          subHeroButtonLabel
          subHeroImage {
            sourceUrl
          }
          gridImagesRqu {
            title
            gridArea
            altText
            imagePath {
              sourceUrl
            }
          }
          cardHeaderText
          cardCollectionRqu {
            buttonLabel
            buttonUrl
            content
            featured
            title
            linkUrl
            linkLabel
            image {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const RecruitWithUsData = data.wpPage.RecruitWithUs_CF;

  console.log(RecruitWithUsData)

  return (
    <Layout>
        <Seo title="Pricing Page" />
        <SubHero hero={RecruitWithUsData} />
        <div className="container">
          <Memberships />
          {/* <table>
            <thead>
              <th><a href="#/ms/signup/60e6fb7305ad7e00048129c9" className="button button--secondary">Entry</a></th>
              <th><a href="#/ms/signup/60e7014e9a642e000469aee9" className="button button--secondary">Base</a></th>
              <th><a href="#/ms/signup/611f2f880c5af90004207432" className="button button--primary">Free</a></th>
              <th><a href="#/ms/signup/60e7015d824c41000428595f" className="button button--secondary">Enhanced</a></th>
              <th><a href="#/ms/signup/60e7016d824c410004285960" className="button button--secondary">Premium</a></th>
            </thead>
          </table> */}
          <ImageCopy cards={RecruitWithUsData.cardCollectionRqu}/>
        </div>

    </Layout>
  )

}
  
export default RecruitWithUs;
  