import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ImageCopy from "../components/ImageCopy"
import SubHero from "../components/SubHero"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const Accessibility = ({ location }) => {
  const data = useStaticQuery(graphql`
    query AccessibilityQuery {
      wpPage(databaseId: { eq: 64 }) {
        id
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
        title
        content
      }
    }
  `)

  let seoData = data.wpPage.seo
  let featuredImage = data.wpPage.featuredImage.node.link

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Accessibility",
  })

  const pageData = {
    subHeroTitle: data.wpPage.title,
    subHeroImage: {
      sourceUrl: featuredImage,
    },
  }
  console.log(featuredImage)
  return (
    <Layout>
      <Seo title={seoData.title} description={seoData.metaDesc} uri={seoData.canonical} socialImage={featuredImage} />
      <Breadcrumbs crumbs={crumbs} />
      <SubHero hero={pageData} />
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
      </div>
    </Layout>
  )
}

export default Accessibility
