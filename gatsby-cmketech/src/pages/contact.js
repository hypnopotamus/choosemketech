import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import ImageCopy from "../components/ImageCopy"
import Accordion from "../components/Accordion"
import SubHero from "../components/SubHero"

const Contact = ({ location }) => {
  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Contact",
  })

  return (
    <Layout>
      <Seo title="Contact Page" />
      <Breadcrumbs crumbs={crumbs} />
      <div className="container">
        <h1>Contact Page</h1>
        <p>Coming Soon</p>
      </div>
    </Layout>
  )
}

export default Contact
