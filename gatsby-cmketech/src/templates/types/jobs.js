import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"

const jobs = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId, uri } = page

  return (
    <Layout
      bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
    >
    
    <h1 className="entry-title" dangerouslySetInnerHTML={{ __html: title }} />

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

export default jobs;
