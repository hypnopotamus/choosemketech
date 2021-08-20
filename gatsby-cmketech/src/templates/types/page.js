import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FeaturedMedia from "../../components/FeaturedMedia"

const page = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId, uri } = page

  return (
    <Layout>
      <Seo title={title} description={excerpt} socialImage={featuredImage?.node} uri={uri} />
            <h1
              className="entry-title"
              dangerouslySetInnerHTML={{ __html: title }}
            />
    </Layout>
  )
}
export default page;
