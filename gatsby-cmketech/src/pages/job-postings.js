import React, { useState, useCallback, useEffect, useRef } from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Sidebar from "../components/CompanyProfileSidebar"
import { MultiSelect } from "react-multi-select-component"
import axios from "axios"
import MemberJobPostings from "../components/MemberJobPostings"

const JobPostings = ({ location }) => {
  const [data, setMemberData] = useState("")
  const [selectCat, setCatSelected] = useState([])
  const [selectStac, setStacSelected] = useState([])
  const [selectPostType, setPostTypeSelected] = useState([])

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
    crumbLabel: "Job Postings",
  })

  let membershipName

  if (data) {
    membershipName = data.membership.name
  }

  const updateJobPost = (e) => {
    e.preventDefault()

    let jobPostForm = e.target

    let formData = new FormData(jobPostForm)

    let url = "https://edit.choosemketech.org"
    const obj = {}

    for (let entry of formData.entries()) {
      obj[entry[0]] = entry[1]
    }

    // const sendGetRequest = async () => {
    //   try {
    //     const resp = await axios.post(url + "/wp-json/acf/v3/job_postings/" + data.id, obj, {
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
    //       },
    //     })
    //     console.log(resp.data)
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }

    console.log(obj)

    //featured is null (not in form)
    //roleCategory is null (not in form)
    //tech stack is null (not in form)
    //type of position is null (not in form)
    //need to refresh the data after this post completes and reload the page
    const sendGetRequest = () => {
      fetch(url + "/wp-json/wp/v2/job_postings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
        },
        body: JSON.stringify({
          title: data.id,
          fields: {
            ...obj,
          },
          status: "publish",
        }),
      })
        .then(function (response) {
          return response.json()
        })
        .then(function (jobpost) {
          console.log(jobpost)
        })
    }

    //sendGetRequest()
  }

  const category = [
    { label: "Software Developer", value: "Software Developer" },
    { label: "Data + Analytics", value: "Data + Analytics" },
    { label: "Sales", value: "Sales" },
    { label: "Content", value: "Content" },
    { label: "Marketing", value: "Marketing" },
    { label: "UX + Design", value: "UX + Design" },
    { label: "HR/Admin", value: "HR/Admin" },
    { label: "IT", value: "IT" },
    { label: "Product", value: "Product" },
    { label: "Engineer", value: "Engineer" },
  ]

  const techStack = [
    { label: "Java", value: "Java" },
    { label: "Linux", value: "Linux" },
    { label: "Python", value: "Python" },
    { label: "C++", value: "C++" },
    { label: ".Net", value: ".Net" },
    { label: "JavaScript", value: "JavaScript" },
    { label: "Front End", value: "Front End" },
    { label: "DevOps", value: "DevOps" },
    { label: "Other", value: "Other" },
  ]

  const positions = [
    { label: "Full Time", value: "Full Time" },
    { label: "Part Time", value: "Part Time" },
    { label: "Remote", value: "Remote" },
    { label: "Freelance", value: "Freelance" },
  ]

  return (
    <Layout>
      <form onSubmit={updateJobPost} id="jobPost" noValidate>
        <Seo title="Job Postings" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="profiles profiles--edit container">
          <div className="row profile__layout">
            <Sidebar sidebar={data} />
            <div className="content">
              <div className="content__header">
                <h1>Job Postings</h1>
              </div>
              <div className="profiles__forms">
                <div className="profiles__forms--cols">
                  <FormInput name="job_title" type="text" required label="Job Title" />
                  <FormInput name="url" type="text" required label="Posting URL" />
                  <FormInput name="type_of_position" children={positions} value={selectPostType} onChange={setPostTypeSelected} type="dropdown" required label="Type of Position" />
                </div>
                <div className="profiles__forms--cols">
                  <div className="form-field dropdown">
                    <label htmlFor="category">Role Category</label>
                    <MultiSelect id="category" name="role_category" options={category} value={selectCat} onChange={setCatSelected} labelledBy="- Select -" />
                  </div>
                  <div className="form-field dropdown">
                    <label htmlFor="techStack">Tech Stack</label>
                    <MultiSelect id="techStack" name="tech_stack" options={techStack} value={selectStac} onChange={setStacSelected} labelledBy="- Select -" />
                  </div>
                </div>
              </div>
              <FormInput name="job_description" type="textarea" required label="Job Description" />
              <FormInput name="featured" type="slider" required label="Featured?" value />
              <div className="form-controls">
                <button type="submit" className="button button--primary">
                  Submit Job Post
                </button>
              </div>
              {data && <MemberJobPostings />}
            </div>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default JobPostings
