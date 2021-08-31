import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import SubHero from "../components/SubHero";
import ComparisonMap from "../components/ComparisonMap";

const WhyMilwaukee = () => {
    // const pageQuery = useStaticQuery(graphql`
    //     query MyQuery {
    //         wpPage(databaseId: { eq: 25 }) {
    //             WhyMilwaukee_CF {
    //                 introCopyHeadline
    //                 introCopySubheader
    //                 introCopyContent
    //                 threeColumnWithCopyContent
    //                 threeColumnWithCopyHeadline
    //                 threeColumnWithIntroBackgroundColor
    //                 threeColumnRepeaterOne {
    //                     threeColumnContent
    //                     threeColumnImage {
    //                         altText
    //                         link
    //                     }
    //                 }
    //                 threeColumnTwoBackgroundColor
    //                 threeColumnTwoRepeater {
    //                     threeColumnImage {
    //                         altText
    //                         link
    //                     }
    //                     threeColumnContent
    //                 }
    //                 threeColumnThirdBackgroundColor
    //                 threeColumnThirdRepeater {
    //                     threeColumnContent
    //                     threeColumnImage {
    //                         altText
    //                         link
    //                     }
    //                 }
    //                 imageCopyRepeater {
    //                     copy
    //                     image {
    //                         altText
    //                         link
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    
    return (
        <Layout>
            <Seo title="Why Milwaukee Page" />
            <div className="container">
                <h1>Why Milwaukee Header</h1>
                {/* <IntroCopy
                  headline={
                      pageQuery.wpPage.WhyMilwaukee_CF.introCopyHeadline
                  }
                  subheader={
                      pageQuery.wpPage.WhyMilwaukee_CF.introCopySubheader
                  }
                  copy={pageQuery.wpPage.WhyMilwaukee_CF.introCopyContent}
                />
                <ComparisonTable />
                <ThreeColumn
                  header={true}
                  headline={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnWithCopyHeadline}
                  copy={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnWithCopyContent}
                  background={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnWithIntroBackgroundColor}
                  content={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnRepeaterOne}
                />
                <ThreeColumn
                  header={false}
                  background={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnTwoBackgroundColor}
                  content={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnTwoRepeater}
                />
                <ThreeColumn
                  header={false}
                  background={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnThirdBackgroundColor}
                  content={pageQuery.wpPage.WhyMilwaukee_CF.threeColumnThirdRepeater}
                />
                <ImageCopy
                  header={false}
                  content={pageQuery.wpPage.WhyMilwaukee_CF.imageCopyRepeater}
                /> */}
            </div>
            <ImageGrid />
        </Layout>
    )
}

  const WhyMKEData = data.wpPage.WhyMilwaukee_CF;

  console.log(WhyMKEData)

  
export default WhyMilwaukee;