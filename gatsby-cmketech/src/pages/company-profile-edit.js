import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ProfileHero from "../components/ProfileHero"
import ImageCopy from "../components/ImageCopy"
import Accordion from "../components/Accordion"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"

const CompanyProfileEdit = ({ location }) => {
  const [data, setMemberData] = useState("")
  useEffect(() => {
    if (window.MemberStack.onReady) {
      window.MemberStack.onReady
        .then(function (member) {
          setMemberData(member)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }, [])

  const featuredStory = [
    {
      title: "Embrace Diversity and Inclusion",
      content: data["featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion"],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-09.jpg",
      },
    },
    {
      title: "Emerging Tech",
      content: data["featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech"],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-05.jpg",
      },
    },
    {
      title: "Place for Tech Talent To Work",
      content: data["featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work"],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/company-profile-05_hero.jpg",
      },
    },
    {
      title: "Company's Environment",
      content: data["featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir"],
      image: {
        sourceUrl: "https://edit.choosemketech.org/wp-content/uploads/2021/09/header-alt-04.jpg",
      },
    },
  ]

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Company Profile Edit",
  })

  return (
    <Layout>
      <form data-ms-form="profile">
        <Seo title="Company Profile" />
        <Breadcrumbs crumbs={crumbs} />
        <ProfileHero profile={data} />

        <div className="profiles container">
          <div className="row profile__layout">
            <div className="sidebar">
              <ul>
                <li className="address">
                  <i className="fas fa-map-marker-alt"></i> <span>{data.address}</span>
                </li>
                <li className="phone">
                  <i className="fas fa-phone-alt"></i> <span>{data["phone-number"]}</span>
                </li>
                <li>
                  <i className="fab fa-linkedin-in"></i>{" "}
                  <a href="" className="link">
                    {data.linkedin}
                  </a>
                </li>
                <li>
                  <i className="fab fa-facebook-f"></i>{" "}
                  <a href="" className="link">
                    {data.facebook}
                  </a>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>{" "}
                  <a href="" className="link">
                    {data.twitter}
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="button button--primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <button type="submit" className="button button--secondary">
                    Save Profile
                  </button>
                </li>
                <li>
                  <Link to="/company-profile" className="link">
                    Back to My Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div className="content">
              <div className="content__header">
                <h1>Welcome {data["company-name"]}!</h1>
                <FormInput name="company-name" type="text" required="true" label="Edit Your Company Name" memberstack="company-name" />
                <ul>
                  <li>
                    <i className="fas fa-users"></i> <span>Employees {data["total-of-employees"]}</span>
                  </li>
                  <li>
                    <i className="fas fa-briefcase"></i> <span>Industry Type {data.industry}</span>
                  </li>
                  <li>
                    <i className="fas fa-external-link-square-alt"></i> <a href={data["company-url"]}>{data["company-url"]}</a>
                  </li>
                </ul>
              </div>
              <div className="content__description">
                <h2>Company Description</h2>
                <p>{data["company-description"]}</p>
                <FormInput name="company-description" type="textarea" required="true" label="Edit Your Company Description" memberstack="company-description" />
              </div>
            </div>
          </div>
          {/* <div className="accordions--wrapper">
            <h2>Company Benefits + Perks</h2>
            <Accordion items={data['perks-benefits']} />
          </div> */}
          <ImageCopy cards={featuredStory} flip={true} />
          <FormInput name="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" type="textarea" required="true" label="Edit Embrace Diversity and Inclusion" memberstack="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" />
          <FormInput name="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" type="textarea" required="true" label="Edit Emerging Tech" memberstack="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" />
          <FormInput name="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" type="textarea" required="true" label="Edit Place for Tech Talent To Work" memberstack="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" />
          <FormInput name="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" type="textarea" required="true" label="Edit Company's Environment" memberstack="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" />
        </div>
      </form>
    </Layout>
  )
}

export default CompanyProfileEdit
