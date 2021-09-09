import React, { useState, useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Sidebar from "../components/CompanyProfileSidebar"
import Rightbar from "../components/CompanyProfileRightbar"
import UploadImages from "../components/UploadImage"
import Modal from "../components/Modal"
import ModalModules from "../components/ModalModules"

const CompanyProfileEdit = ({ location }) => {
  const logoModal = useRef()
  const headerModal = useRef()

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

  const { crumbs } = useBreadcrumb({
    location,
    crumbLabel: "Company Profile Edit",
  })

  let membershipName

  if (data) {
    membershipName = data.membership.name
  }

  /* start These should probably be in a ACF */

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

  const imageData = [
    {
      logo: {
        src: data.logo,
        bgcolor: data["logo-background-color"],
        class: "uploaded-image--logo",
      },
    },
    {
      header: {
        src: data["background-image"],
        bgcolor: data["background-color"],
        class: "uploaded-image--header",
      },
    },
  ]

  /* end These should probably be in a ACF */
  console.log(imageData)
  return (
    <Layout>
      <form data-ms-form="profile">
        <Seo title="Company Profile" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="profiles profiles--edit container">
          <div className="row profile__layout">
            <Sidebar sidebar={data} />

            <div className="content">
              <div className="content__header">
                <h1>Welcome {data["company-name"]}!</h1>
                <h3>{membershipName}</h3>
                <div className="upload--file">
                  <div className="uploaded--file">
                    <label htmlFor="upload-logo" className="image--file" onClick={() => logoModal.current.openModal()}>
                      <img src={data.logo} alt={data["company-name"]} id="logoImage" />
                    </label>
                  </div>
                  <div className="uploaded--file">
                    <label htmlFor="upload-background-image" className="image--file" onClick={() => headerModal.current.openModal()}>
                      <img src={data["background-image"]} alt={data["company-name"]} id="backgroundImage" />
                    </label>
                  </div>
                </div>
              </div>
              <h3>Company Information</h3>
              <FormInput name="company-name" type="text" required={true} label="Company Name" memberstack="company-name" />
              <FormInput name="industry" type="dropdown" label="Industry" memberstack="industry" children={options} halfLength={true} />
              <FormInput name="address" type="text" label="Address" memberstack="address" />
              <FormInput name="general-contact-email-address" type="text" label="Contact Email" memberstack="general-contact-email-address" halfLength={true} />
              <FormInput name="company-url" type="text" required={true} label="Company URL" memberstack="company-url" halfLength={true} />
              <FormInput name="total-of-employees" type="dropdown" label="Company Size" memberstack="total-of-employees" children={companySize} halfLength={true} />
              <FormInput name="company-description" type="textarea" label="Company Description" memberstack="company-description" maxlength="700" />
              <FormInput name="perks-benefits" type="dropdown" label="Perks + Benefits" memberstack="perks-benefits" children={perksBenefits} halfLength={true} />

              <div className="profiles__company-story">
                <h3>Company Stories</h3>
                <p>Help candidates get to know you better by adding a brief story about emerging tech applications, community involvement, diversity initiatives, and more to your profile.</p>
                <FormInput name="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" memberstack="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" type="textarea" label="Embrace Diversity and Inclusion" />
                <FormInput name="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" memberstack="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" type="textarea" label="Emerging Tech" />
                <FormInput name="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" memberstack="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" type="textarea" label="Place for Tech Talent To Work" />
                <FormInput name="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" memberstack="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" type="textarea" label="Company's Environment" />
              </div>

              <div className="form-controls">
                <button type="submit" className="button button--primary">
                  Save Profile
                </button>
                <Link to="/company-profile" className="link">
                  Back to My Profile
                </Link>
              </div>
            </div>

            <Rightbar rightbar={data} />
          </div>
        </div>
      </form>
      <Modal ref={logoModal}>
        <ModalModules ref={logoModal} formDisplayed="logoUpload" data={imageData[0].logo} />
      </Modal>
      <Modal ref={headerModal}>
        <ModalModules ref={headerModal} formDisplayed="headerUpload" data={imageData[1].header} />
      </Modal>
    </Layout>
  )
}

export default CompanyProfileEdit
