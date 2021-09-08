import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import SubHero from "../../components/SubHero"
import ImageGrid from "../../components/ImageGrid"
import Breadcrumbs from "../../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const page = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId, uri } = page
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: title,
  })

  const heroData = {
    subHeroTitle: title,
    subHeroImage: {
      sourceUrl: featuredImage.node.localFile.publicURL,
    },
  }

  return (
    <Layout bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}>
      <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />
      <Breadcrumbs crumbs={crumbs} />
      <SubHero hero={heroData} />
      <div className="container">
        <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="entry-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {/* <ImageGrid gallery={data.gridImagesWmke} /> */}
    </Layout>
  )
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default page
