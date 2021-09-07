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
import Sidebar from "../components/CompanyProfileSidebar"
import Rightbar from "../components/CompanyProfileRightbar"

const MemberProfile = ({ location }) => {
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

  let membershipName

  if (data) {
    membershipName = data.membership.name
  }

  const changeLogo = (e) => {
    var logoImage = document.getElementById("logoImage")
    logoImage.src = URL.createObjectURL(e.target.files[0])
    logoImage.onload = function () {
      URL.revokeObjectURL(logoImage.src)
    }
  }
  const changeBackground = (e) => {
    var backgroundImage = document.getElementById("backgroundImage")
    backgroundImage.src = URL.createObjectURL(e.target.files[0])
    backgroundImage.onload = function () {
      URL.revokeObjectURL(backgroundImage.src)
    }
    console.log(backgroundImage)
  }

  const options = [
    { label: "Education", value: "Education" },
    { label: "Finance / Insurance", value: "Finance / Insurance" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Logistics", value: "Logistics" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "News / Entertainment", value: "News / Entertainment" },
    { label: "Retail", value: "Retail" },
    { label: "Tech Services", value: "Tech Services" },
    { label: "Travel / Hospitality", value: "Travel / Hospitality" },
    { label: "Utilities / Water Tech", value: "Utilities / Water Tech" },
    { label: "Other", value: "Other" },
  ]

  const companySize = [
    { label: "1-50", value: "1-50" },
    { label: "51-250", value: "51-250" },
    { label: "251-500", value: "251-500" },
    { label: "501-1000", value: "501-1000" },
    { label: "100+", value: "100+" },
  ]

  const perksBenefits = [
    { label: "Flexible Schedule", value: "Flexible Schedule" },
    { label: "Remote Work Options", value: "Remote Work Options" },
    { label: "Diversity Employee Resource Groups", value: "Diversity Employee Resource Groups" },
    { label: "Health Benefits", value: "Health Benefits" },
    { label: "Dental & Vision Benefits", value: "Dental & Vision Benefits" },
    { label: "401k / HSA / Retirement", value: "401k / HSA / Retirement" },
    { label: "Paid Time Off", value: "Paid Time Off" },
    { label: "Wellness Programs", value: "Wellness Programs" },
    { label: "Mental Health Resources (EPA)", value: "Mental Health Resources (EPA)" },
    { label: "Company Outings", value: "Company Outings" },
    { label: "Food / Stock Kitchen", value: "Food / Stock Kitchen" },
    { label: "Games Recreation", value: "Games Recreation" },
    { label: "Business Casual Attire", value: "Business Casual Attire" },
    { label: "Training Budget", value: "Training Budget" },
    { label: "Stock Options", value: "Stock Options" },
    { label: "Parking + Transportation Options", value: "Parking + Transportation Options" },
    { label: "Relocation Packages", value: "Relocation Packages" },
  ]

  return (
    <Layout>
      <form data-ms-form="profile">
        <Seo title="Company Profile" />
        <Breadcrumbs crumbs={crumbs} />
        <ProfileHero profile={data} />

        <div className="profiles profiles--edit container">
          <div className="row profile__layout">
            <Sidebar sidebar={data} />

            <div className="content">
              <div className="content__header">
                <h1>Welcome {data["company-name"]}!</h1>
                <h3>{membershipName}</h3>
                <div className="upload--file">
                  <div className="uploaded--file">
                    <label htmlFor="upload-logo" className="image--file">
                      <img src={data.logo} alt={data["company-name"]} id="logoImage" />
                    </label>
                    <FormInput name="upload-logo" type="file" label="Upload Logo" onChange={changeLogo} accept="image/jpeg, image/png, image/svg+xml" />
                  </div>
                </div>
              </div>
              <h3>Profile Information</h3>
              <FormInput name="first-name" type="text" required={true} label="First Name" memberstack="first-name" />

              <div className="form-controls">
                <button type="submit" className="button button--primary">
                  Save Profile
                </button>
                <Link to="/member-profile" className="link">
                  Back to My Profile
                </Link>
              </div>
            </div>

            <Rightbar rightbar={data} />
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default MemberProfile
