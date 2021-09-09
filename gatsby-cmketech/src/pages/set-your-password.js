import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ImageCopy from "../components/ImageCopy"
import SubHero from "../components/SubHero"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const SetYourPassword = ({ location }) => {
  const data = useStaticQuery(graphql`
    query SetYourPasswordQuery {
      wpPage(databaseId: { eq: 1571 }) {
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
    crumbLabel: "Set Your Password",
  })

  const pageData = {
    subHeroTitle: data.wpPage.title,
    subHeroContent: data.wpPage.content,
    subHeroButtonUrl: "/#/ms/password-reset",
    subHeroButtonLabel: "Reset Password",
    subHeroImage: {
      sourceUrl: featuredImage,
    },
  }

  return (
    <Layout>
      <Seo title={seoData.title} description={seoData.metaDesc} uri={seoData.canonical} socialImage={featuredImage} />

      <Breadcrumbs crumbs={crumbs} />
      <SubHero hero={pageData} />
    </Layout>
  )
}

export default SetYourPassword
