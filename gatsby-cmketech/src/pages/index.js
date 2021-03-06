import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import SubHero from "../components/SubHero"
import JobCarousel from "../components/JobCarousel"
import ImageGrid from "../components/ImageGrid"
import ImageCopy from "../components/ImageCopy"
import ThreeColumn from "../components/ThreeColumn"
import CallToAction from "../components/CTA"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const IndexPage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      wpPage(databaseId: { eq: 102 }) {
        databaseId
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
        Pages_CF {
          heroSubText
          heroText
          heroVideo
          heroImage {
            sourceUrl
          }
          introTitle
          introSubTitle
          introContent
          subHeroTitle
          subHeroSubTitle
          subHeroImage {
            sourceUrl
          }
          subHeroContent
          subHeroButtonUrl
          subHeroButtonLabel
          gridImages {
            title
            altText
            gridArea
            imagePath {
              sourceUrl
            }
          }
          threeColumnHeaderText
          backgroundColor
          threeColumnCards {
            content
            link
            linkLabel
            title
            image {
              sourceUrl
            }
          }
          cardCollectionHp {
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
          cardCollectionHp2 {
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
          cardHeaderText2
          cardHeaderText
          ctaHeader
          ctaButtonLabel
          ctaButtonUrl
          ctaLinkLabel
          ctaLinkUrl
          ctaBackgroundImage {
            sourceUrl
          }
        }
      }
    }
  `)

  const IndexPageData = data.wpPage.Pages_CF
  const seoData = data.wpPage.seo
  const featuredImage = data.wpPage.featuredImage.node.link

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Home",
  })
  
  return (
    <Layout bodyClass={`page page-id-${data.wpPage.databaseId}`}>
      <Seo title={seoData.title} description={seoData.metaDesc} uri={seoData.canonical} socialImage={featuredImage} />
      <Hero hero={IndexPageData} />
      <ThreeColumn columns={IndexPageData.threeColumnCards} title={IndexPageData.threeColumnHeaderText} background={IndexPageData.backgroundColor}/>
      <div className="container">
        <ImageCopy cards={IndexPageData.cardCollectionHp} title={IndexPageData.cardHeaderText} />
      </div>
      {/* <JobCarousel /> */}
      <CallToAction cta={IndexPageData} />
      <div className="container">
        <ImageCopy cards={IndexPageData.cardCollectionHp2} title={IndexPageData.cardHeaderText2} flip={true} />
      </div>
      <SubHero hero={IndexPageData} />
      <ImageGrid gallery={IndexPageData.gridImages} />
    </Layout>
  )
}

export default IndexPage
