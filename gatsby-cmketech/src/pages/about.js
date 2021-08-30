import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";

const About = () => {
//   const heroQuery = useStaticQuery(graphql`
//     query HeroQuery {
//       wpPage(databaseId: {eq: 52} ){
        
//       }
//     }
//   `)
  return (
    <Layout>
        <Seo title="About" />
        <div className="container">
          <h1>About</h1>
        </div>
    </Layout>
  )
  
}
  
export default About;
  