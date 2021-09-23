import React, { useState, useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Sidebar from "../components/CompanyProfileSidebar"
import Rightbar from "../components/CompanyProfileRightbar"
import Modal from "../components/Modal"
import ModalModules from "../components/ModalModules"
import { nominalTypeHack } from "prop-types"

const CompanyProfileEdit = ({ location, featuredStories }) => {
  const logoModal = useRef()
  const headerModal = useRef()

  const [data, setMemberData] = useState("")
  const [transferedImage, setTransferedImage] = useState("")
  const [transferedColor, setTransferedColor] = useState("")

  const [transferedBgImage, setTransferedBgImage] = useState("")
  const [transferedBgColor, setTransferedBgColor] = useState("")

  useEffect(() => {
    if (window.MemberStack.onReady) {
      window.MemberStack.onReady
        .then(function (member) {
          setMemberData(member)
          console.log(member)
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
        width: 298,
        height: 298,
      },
    },
    {
      header: {
        src: data["background-image"],
        bgcolor: data["background-color"],
        class: "uploaded-image--header",
        width: 1500,
        height: 1000,
      },
    },
  ]

  if (transferedImage) {
    data.logo = transferedImage
  }
  if (transferedColor) {
    data["logo-background-color"] = transferedColor
  }

  if (transferedBgImage) {
    data["background-image"] = transferedBgImage
  }
  if (transferedBgColor) {
    data["background-color"] = transferedBgColor
  }

  const featuredStory = [<FormInput name="Featured Story 1" memberstack="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" type="textarea" label="Featureed Story 1" />, <FormInput name="Featured Story 2" memberstack="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" type="textarea" label="Featureed Story 2" />, <FormInput name="Featured Story 3" memberstack="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" type="textarea" label="Featureed Story 3" />, <FormInput name="Featured Story 4" memberstack="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" type="textarea" label="Featureed Story 4" />, <FormInput name="Featured Story 5" memberstack="featured-story-5" type="textarea" label="Featureed Story 5" />]

  /* end These should probably be in a ACF */
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
                <h3>
                  {membershipName} Member <Link to="/recruit-with-us">Upgrade</Link>
                </h3>
                <div className="upload--file">
                  <div className="uploaded--file">
                    <label htmlFor="upload-logo" className="image--file" onClick={() => logoModal.current.openModal()} style={{ backgroundColor: `${data["logo-background-color"]}` }}>
                      <input type="hidden" data-ms-member="logo" defaultValue={data.logo} />
                      <input type="hidden" data-ms-member="logo-background-color" defaultValue={data["logo-background-color"]} />
                      <img src={data.logo} alt={data["company-name"]} id="logoImage" />
                    </label>
                    <p htmlFor="upload-background-image">
                      Upload Logo <i className="fas fa-upload"></i>
                    </p>
                  </div>
                  <div className="uploaded--file">
                    <input type="hidden" data-ms-member="background-image" defaultValue={data["background-image"]} />
                    <input type="hidden" data-ms-member="background-color" defaultValue={data["background-color"]} />
                    <label htmlFor="upload-background-image" className="image--file" onClick={() => headerModal.current.openModal()} style={{ backgroundColor: `${data["background-color"]}` }}>
                      <img src={data["background-image"]} alt={data["company-name"]} id="backgroundImage" />
                    </label>
                    <p htmlFor="upload-background-image">
                      Upload Background <i className="fas fa-upload"></i>
                    </p>
                  </div>
                </div>
              </div>
              <h3>Company Information</h3>
              <div className="profiles__forms">
                <div className="profiles__forms--cols">
                  <FormInput name="company-name" type="text" required={true} label="Company Name" memberstack="company-name" />
                  <FormInput name="industry" type="dropdown" label="Industry" memberstack="industry" children={options} />
                  <FormInput name="company-url" type="text" required={true} label="Company URL" memberstack="company-url" />
                  <FormInput name="total-of-employees" type="dropdown" label="Company Size" memberstack="total-of-employees" children={companySize} />
                </div>
                <div className="profiles__forms--cols">
                  <FormInput name="address" type="text" label="Address" memberstack="address" />
                  <FormInput name="general-contact-email-address" type="text" label="Contact Email" memberstack="general-contact-email-address" />
                  <FormInput type="text" id="phonenumber" name="phonenumber" label="Phone Number" memberstack="phone-number" />
                  <FormInput name="perks-benefits" type="dropdown" label="Perks + Benefits" memberstack="perks-benefits" children={perksBenefits} />
                </div>
              </div>
              <FormInput name="company-description" type="textarea" label="Company Description" memberstack="company-description" maxlength="700" />

              <div className="profiles__company-story">
                <h3>Company Stories</h3>
                <p>Help candidates get to know you better by adding a brief story about emerging tech applications, community involvement, diversity initiatives, and more to your profile.</p>

                <FormInput name="Featured Story 1" memberstack="featured-story-what-makes-your-company-a-great-place-for-tech-talent-to-work" type="textarea" label="Featureed Story 1" />
                <FormInput name="Featured Story 2" memberstack="featured-story-what-skills-or-qualities-reflect-applicants-who-would-thrive-in-your-companys-envir" type="textarea" label="Featureed Story 2" />
                <FormInput name="Featured Story 3" memberstack="featured-story-what-initiatives-is-your-company-doing-to-embrace-diversity-and-inclusion" type="textarea" label="Featureed Story 3" />
                <FormInput name="Featured Story 4" memberstack="featured-story-what-is-something-your-company-is-currently-doing-in-emerging-tech" type="textarea" label="Featureed Story 4" />
                <FormInput name="Featured Story 5" memberstack="featured-story-5" type="textarea" label="Featureed Story 5" />
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
        <ModalModules ref={logoModal} formDisplayed="logoUpload" data={imageData[0].logo} transferColor={(transferedColor) => setTransferedColor(transferedColor)} transferImage={(transferedImage) => setTransferedImage(transferedImage)} />
      </Modal>
      <Modal ref={headerModal}>
        <ModalModules ref={headerModal} formDisplayed="headerUpload" data={imageData[1].header} transferColor={(transferedBgColor) => setTransferedBgColor(transferedBgColor)} transferImage={(transferedBgImage) => setTransferedBgImage(transferedBgImage)} />
      </Modal>
    </Layout>
  )
}

export default CompanyProfileEdit
