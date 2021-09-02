import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ProfileHero from "../components/ProfileHero"
import ImageCopy from "../components/ImageCopy"
import Accordion from "../components/Accordion"

const CompanyProfile = () => {

  const [data, setMemberData] = useState("");
  useEffect(() => {
    if(window.MemberStack.onReady){
      window.MemberStack.onReady.then(function(member){
        setMemberData(member) 
      });
    }
  }, [])

  console.log(data)
  const featuredStory = [
    {
      title : "Embrace Diversity and Inclusion",
      content : data['featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion'],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-09.jpg"
      }
    },
    {
      title : "Emerging Tech",
      content : data['featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech'],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-05.jpg"
      }
    },
    {
      title : "Place for Tech Talent To Work",
      content : data['featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work'],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/company-profile-05_hero.jpg"
      }
    },
    {
      title : "Company's Environment",
      content : data['featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir'],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-04.jpg"
      }
    },
  ]

  return (
    <Layout>
        <Seo title="Company Profile" />

        <ProfileHero profile={data} />
        
        <div className="profiles container">
          <div className="row">
            <div className="sidebar">
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> {data.address}</li>
                <li><i className="fas fa-phone-alt"></i> {data['phone-number']}</li>
                <li><i className="fab fa-linkedin-in"></i> {data.linkedin}</li>
                <li><i className="fab fa-facebook-f"></i> {data.facebook}</li>
                <li><i className="fab fa-twitter"></i> {data.twitter}</li>
                <li><Link to="/contact" className="button button--primary">Contact Us</Link></li>
              </ul>
            </div>
            <div className="content">
              <div className="content__header">
                <h1>Welcome {data['company-name']}!</h1>
                <ul>
                  <li><i className="fas fa-users"></i> Employees {data['total-of-employees']}</li>
                  <li><i className="fas fa-briefcase"></i> Industry Type {data.industry}</li>
                  <li><i className="fas fa-external-link-square-alt"></i> {data['company-url']}</li>
                </ul>
              </div>
              <div className="content__description">
                <h2>Company Description</h2>
                <p>{data['company-description']}</p>
              </div>
            </div>
          </div>
          {/* <h2>Company Benefits + Perks</h2>
          <Accordion /> */}
          <ImageCopy cards={featuredStory} flip={true}/>
        </div>
    </Layout>
  )

}
  
export default CompanyProfile;
  