import React, { useState, useCallback, useEffect, useRef } from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Sidebar from "../components/CompanyProfileSidebar"
import axios from "axios"

const JobPostings = ({ location }) => {
  const [data, setMemberData] = useState("")

  useEffect(() => {
    if (window.MemberStack.onReady) {
      window.MemberStack.onReady
        .then(function (member) {
          setMemberData(member)
          //console.log(member)
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
    // let obj = {}

    // for (let entry of formData.entries()) {
    //   obj[entry[0]] = entry[1]
    // }

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
            job_title: obj.job_title,
            job_description: obj.job_description,
            url: obj.url,
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

    sendGetRequest()
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
    { label: "Education", value: "Education" },
    { label: "Finance/Insurance", value: "Finance/Insurance" },
    { label: "Healthcare", value: "Healthcare" },
    { label: "Retail", value: "Retail" },
    { label: "Software", value: "Software" },
    { label: "Logistics", value: "Logistics" },
    { label: "Travel/Hospitality", value: "Travel/Hospitality" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Media", value: "Media" },
    { label: "Tech Services", value: "Tech Services" },
    { label: "Utilities/Water Tech", value: "Utilities/Water Tech" },
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
                </div>
                <div className="profiles__forms--cols">
                  <FormInput name="role_category" type="dropdown" multiSelect="true" required label="Role Category" children={category} value />
                  <FormInput name="tech_stack" type="dropdown" multiSelect="true" required label="Tech Stack" children={techStack} value />
                </div>
              </div>
              <FormInput name="job_description" type="textarea" required label="Job Description" />
              <FormInput name="featured" type="slider" required label="Featured?" value />
              <div className="form-controls">
                <button type="submit" className="button button--primary">
                  Submit Job Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default JobPostings
