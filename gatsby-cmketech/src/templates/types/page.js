import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"

const page = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId, uri } = page

  console.log(data)

  return (
    <Layout
      bodyClass={`page-template-default page page-id-${databaseId} wp-embed-responsive singular missing-post-thumbnail has-no-pagination not-showing-comments footer-top-visible customize-support`}
    >
      <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />
      <div className="container">
      <article
        className={`post-${databaseId} post page type-page status-publish hentry`}
        id={`post-${databaseId}`}
      >
          <div className="entry-header-inner section-inner medium">
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

        <FeaturedMedia image={featuredImage} />

        <div className="post-inner thin">
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>
      </div>
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

export default page;
