import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import SubHero from "../components/SubHero"
import ImageCopy from "../components/ImageCopy"
import Memberships from "../components/Memberships"
import ImageGrid from "../components/ImageGrid"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const RecruitWithUs = ({ location }) => {
  const data = useStaticQuery(graphql`
    query RecruitWithUsQuery {
      wpPage(databaseId: { eq: 19 }) {
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

  let RecruitWithUsData
  let seoData
  let featuredImage

  if (data) {
    RecruitWithUsData = data.wpPage.RecruitWithUs_CF
    seoData = data.wpPage.seo
    featuredImage = data.wpPage.featuredImage.node.link
  }
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Recruit With Us",
  })

  return (
    <Layout>
      <Seo title={seoData.title} description={seoData.metaDesc} uri={seoData.canonical} socialImage={featuredImage} />
      <Breadcrumbs crumbs={crumbs} />
      <SubHero hero={RecruitWithUsData} />
      <div className="container">
        <Memberships />
        <ImageCopy cards={RecruitWithUsData.cardCollectionRqu} />
        <ImageGrid gallery={RecruitWithUsData.gridImagesRqu} />
      </div>
    </Layout>
  )
}

export default RecruitWithUs
