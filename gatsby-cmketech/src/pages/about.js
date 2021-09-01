import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import ImageCopy from "../components/ImageCopy";
import SubHero from "../components/SubHero";

const About = () => {
   const data = useStaticQuery(graphql`
     query AboutCFQuery {
        wpPage(databaseId: {eq: 52}) {
          About_CF {
            subHeroTitle
            subHeroSubTitle
            subHeroContent
            subHeroButtonUrl
            subHeroButtonLabel
            subHeroImage {
              sourceUrl
            }
            aboutIntroCopySubheader
            aboutIntroCopyHeadline
            aboutIntroCopyContent
            aboutImageCopyRepeater {
              copy
              image {
                sourceUrl
              }
            }
          }
        }
     }
    `)

// let About = data.wpPage.About_CF;
// console.log(About.aboutImageCopyRepeater)

  return (
    <Layout>
        <Seo title="About" />
          {/* <SubHero hero={About} /> */}
          <div className="container">
          {/* <ImageCopy
            header={false}
            content={About.aboutImageCopyRepeater} 
          /> */}

          {/* <SubHero hero={WhyMKEData} />
          <IntroCopy
            headline={aboutQuery.wpPage.About_CF.aboutIntroCopyHeadline}
            subheader={aboutQuery.wpPage.About_CF.aboutIntroCopySubheader}
            copy={aboutQuery.wpPage.About_CF.aboutIntroCopyContent} />
        <ImageCopy
            header={false}
            content={aboutQuery.wpPage.About_CF.aboutImageCopyRepeater} /> */}
        </div>
    </Layout>
  )
  
}
  
export default About;