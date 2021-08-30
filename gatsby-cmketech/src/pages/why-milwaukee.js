import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import IntroCopy from "../components/IntroCopy"
import ThreeColumn from "../components/ThreeColumn"
import { graphql, useStaticQuery } from "gatsby"
import ImageCopy from "../components/ImageCopy"
import ImageGrid from "../components/ImageGrid"
import ComparisonTable from "../components/ComparisonTable"

const WhyMilwaukee = () => {
    const pageQuery = useStaticQuery(graphql`
        query MyQuery {
            wpPage(databaseId: { eq: 25 }) {
                why_milwaukee_cf {
                    introCopyHeadline
                    introCopySubheader
                    introCopyContent
                    threeColumnWithCopyContent
                    threeColumnWithCopyHeadline
                    threeColumnWithIntroBackgroundColor
                    threeColumnRepeaterOne {
                        threeColumnContent
                        threeColumnImage {
                            altText
                            link
                        }
                    }
                    threeColumnTwoBackgroundColor
                    threeColumnTwoRepeater {
                        threeColumnImage {
                            altText
                            link
                        }
                        threeColumnContent
                    }
                    threeColumnThirdBackgroundColor
                    threeColumnThirdRepeater {
                        threeColumnContent
                        threeColumnImage {
                            altText
                            link
                        }
                    }
                    imageCopyRepeater {
                        copy
                        image {
                            altText
                            link
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <Seo title="Why Milwaukee Page" />
            <div className="container">
                <h1>Why Milwaukee Header</h1>
                <IntroCopy
                  headline={
                      pageQuery.wpPage.why_milwaukee_cf.introCopyHeadline
                  }
                  subheader={
                      pageQuery.wpPage.why_milwaukee_cf.introCopySubheader
                  }
                  copy={pageQuery.wpPage.why_milwaukee_cf.introCopyContent}
                />
                <ComparisonTable />
                <ThreeColumn
                  header={true}
                  headline={pageQuery.wpPage.why_milwaukee_cf.threeColumnWithCopyHeadline}
                  copy={pageQuery.wpPage.why_milwaukee_cf.threeColumnWithCopyContent}
                  background={pageQuery.wpPage.why_milwaukee_cf.threeColumnWithIntroBackgroundColor}
                  content={pageQuery.wpPage.why_milwaukee_cf.threeColumnRepeaterOne}
                />
                <ThreeColumn
                  header={false}
                  background={pageQuery.wpPage.why_milwaukee_cf.threeColumnTwoBackgroundColor}
                  content={pageQuery.wpPage.why_milwaukee_cf.threeColumnTwoRepeater}
                />
                <ThreeColumn
                  header={false}
                  background={pageQuery.wpPage.why_milwaukee_cf.threeColumnThirdBackgroundColor}
                  content={pageQuery.wpPage.why_milwaukee_cf.threeColumnThirdRepeater}
                />
                <ImageCopy
                  header={false}
                  content={pageQuery.wpPage.why_milwaukee_cf.imageCopyRepeater}
                />
            </div>
            <ImageGrid />
        </Layout>
    )
}

export default WhyMilwaukee
