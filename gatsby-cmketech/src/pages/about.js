import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import IntroCopy from "../components/IntroCopy";
import ImageCopy from "../components/ImageCopy";

const About = () => {
   const aboutQuery = useStaticQuery(graphql`
     query AboutCFQuery {
        wpPage(databaseId: {eq: 52}) {
            About_CF {
            aboutIntroCopyHeadline
            aboutIntroCopySubheader
            aboutIntroCopyContent
            aboutImageCopyRepeater {
                aboutCarouselCopy
                aboutCarouselImage {
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
        <Seo title="About" />
        <div className="container">
          <h1>About</h1>
          <IntroCopy
            headline={
                aboutQuery.wpPage.About_CF.aboutIntroCopyHeadline
            }
            subheader={
                aboutQuery.wpPage.About_CF.aboutIntroCopySubheader
            }
            copy={aboutQuery.wpPage.About_CF.aboutIntroCopyContent}
        />
        <ImageCopy
            header={false}
            content={aboutQuery.wpPage.About_CF.aboutImageCopyRepeater}
        />
        </div>
    </Layout>
  )
  
}
  
export default About;
  