import React, { useState, useCallback, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Modal from "./Modal"
import ModalModules from "./ModalModules"

const Memberships = (membership, current, topTierMember) => {
  const modalRef1 = useRef()
  const modalRef2 = useRef()
  const modalRef3 = useRef()
  const modalRef4 = useRef()
  const [data, setMemberData] = useState("")
  useEffect(() => {
    window.MemberStack.onReady
      .then(function (member) {
        setMemberData(member)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [data])

  if (data) {
    const membershipData = [
      {
        name: "Premium",
        status: false,
      },
      {
        name: "Enhanced",
        status: false,
      },
      {
        name: "Base",
        status: false,
      },
      {
        name: "Entry",
        status: false,
      },
    ]
    let membershipName = document.getElementById(data.membership.name)
    console.log(data.membership.name)
    membershipData.forEach((item) => {
      if (item.name === data.membership.name) {
        item.status = true
        if (item.status && membershipName) {
          membershipName.innerHTML = "Current Membership"
        }
      }
    })
  }

  return (
    <div className="memberships table">
      <table>
        <thead>
          <tr>
            <th>
              <span>Includes</span>
              <small className="header">Member Benefits</small>
            </th>
            <th></th>
            <th>
              <span>Premium</span>
              <small>For enterprise tech companies</small>
            </th>
            <th>
              <span>Enhanced</span>
              <small>For mid to large tech employers</small>
            </th>
            <th>
              <span>Base</span>
              <small>For small tech employers</small>
            </th>
            <th>
              <span>Entry</span>
              <small>
                For startups + engaged <br />
                community members
              </small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company Profile Listing</td>
            <td></td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Link to Job Board</td>
            <td></td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
          </tr>
          <tr>
            <td>Tech Company Listing</td>
            <td></td>
            <td>Premium Placement</td>
            <td>Featured</td>
            <td>Limited Details</td>
            <td>Name and Location only</td>
          </tr>
          <tr>
            <td>Top Job Search Placement</td>
            <td></td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td>Job listings</td>
            <td></td>
            <td>12/month</td>
            <td>7/month</td>
            <td>2/month</td>
            <td>2/month</td>
          </tr>
          <tr>
            <td className="header">
              <span>Homepage Features</span>
            </td>
            <td></td>
            <td colSpan="4">
              <hr />
            </td>
          </tr>
          <tr>
            <td>Profile Listing</td>
            <td></td>
            <td>4/year</td>
            <td>2/year</td>
            <td>1/year</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td>Featured Jobs</td>
            <td></td>
            <td>2/month</td>
            <td>1/month</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td>Community Spotlight</td>
            <td></td>
            <td>2/month</td>
            <td>1/month</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td className="header">
              <span>Company Profile Features</span>
            </td>
            <td></td>
            <td colSpan="4">
              <hr />
            </td>
          </tr>
          <tr>
            <td>Social Media Links</td>
            <td></td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td>Company Stories</td>
            <td></td>
            <td>5 stories</td>
            <td>3 stories</td>
            <td>1 stories</td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr>
            <td>Profile Analytics</td>
            <td></td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-check"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
            <td>
              <i className="fas fa-times"></i>
            </td>
          </tr>
          <tr data-ms-content="members">
            <td></td>
            <td></td>
            <td id="Premium">
              <a href="mailto:contact@mketech.org" className="button button--primary">
                Contact Us
              </a>
            </td>
            <td id="Enhanced">
              <a href="mailto:contact@mketech.org" className="button button--primary">
                Contact Us
              </a>
            </td>
            <td id="Base">
              <a href="/#/ms/signup/60e7014e9a642e000469aee9" data-ms-content="members" className="button button--primary">
                Select
              </a>
            </td>
            <td id="Entry">
              <a href="/#/ms/signup/60e6fb7305ad7e00048129c9" data-ms-content="members" className="button button--primary">
                Select
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <a href="#/ms/signup/60e7014e9a642e000469aee9">test sign up</a>
      <div className="memberships__cta" data-ms-content="!members">
        <a href="#" className="button button--primary" onClick={() => modalRef2.current.openModal()}>
          Create My Profile
        </a>
        <a href="mailto:contact@mketech.org" className="link">
          I have addtional questions
        </a>
      </div>
      <Modal ref={modalRef2}>
        <ModalModules ref={modalRef2} formDisplayed="recruit-form" formMembership="60e6fb7305ad7e00048129c9" />
      </Modal>
    </div>
  )
}

export default Memberships
