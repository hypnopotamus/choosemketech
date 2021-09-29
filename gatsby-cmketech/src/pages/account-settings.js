import React, { useState, useCallback, useEffect, useRef } from "react"
import Seo from "../components/Seo"
import Layout from "../components/Layout"
import FormInput from "../components/FormInput"
import Breadcrumbs from "../components/Breadcrumbs"
import { useBreadcrumb } from "gatsby-plugin-breadcrumb"
import Sidebar from "../components/CompanyProfileSidebar"
import axios from "axios"

const AccountSettings = ({ location }) => {
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
    crumbLabel: "Account Settings",
  })

  let membershipName

  if (data) {
    membershipName = data.membership.name
  }

  return (
    <Layout>
      <form id="accountSettings" noValidate>
        <Seo title="Account Settings" />
        <Breadcrumbs crumbs={crumbs} />
        <div className="profiles profiles--edit container">
          <div className="row profile__layout">
            <Sidebar sidebar={data} />
            <div className="content">
              <div className="content__header">
                <h1>Account Settings</h1>
              </div>
              <h2>Set Secondary User</h2>
              <div class="ctct-inline-form" data-form-id="f09a2568-07c1-43a4-bea7-5771f587e187"></div>
              <FormInput name="primary_user" type="email" required label="Primary User" value={data.email} />
              <FormInput name="primary_userpassword" type="password" required label="Primary User Password" />
              <FormInput name="secondary_user" type="email" required label="Secondary User" placeholder="someone@domain.com" />
              <FormInput name="secondary_usernote" type="textarea" required label="Note" />
              <div className="form-controls">
                <button type="submit" className="button button--primary">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  )
}

export default AccountSettings
