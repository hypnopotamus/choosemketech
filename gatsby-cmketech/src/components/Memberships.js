import React, { useState, useRef } from "react"
import { Link } from "gatsby"
import Modal from "./Modal"
import ModalModules from "./ModalModules"

const Memberships = () => {
  const modalRef1 = useRef()
  const modalRef2 = useRef()
  const modalRef3 = useRef()
  const modalRef4 = useRef()

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
          <tr>
            <td></td>
            <td></td>
            <td>
              <a href="#" className="button button--primary" onClick={() => modalRef1.current.openModal()}>
                Select
              </a>
            </td>
            <td>
              <a href="#" className="button button--primary" onClick={() => modalRef2.current.openModal()}>
                Select
              </a>
            </td>
            <td>
              <a href="#" className="button button--primary" onClick={() => modalRef3.current.openModal()}>
                Select
              </a>
            </td>
            <td>
              <a href="#" className="button button--primary" onClick={() => modalRef4.current.openModal()}>
                Select
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal ref={modalRef1}>
        <ModalModules ref={modalRef1} formDisplayed="recruit-form" formMembership="60e7016d824c410004285960" />
      </Modal>
      <Modal ref={modalRef2}>
        <ModalModules ref={modalRef2} formDisplayed="recruit-form" formMembership="60e7015d824c41000428595f" />
      </Modal>
      <Modal ref={modalRef3}>
        <ModalModules ref={modalRef3} formDisplayed="recruit-form" formMembership="60e6fb7305ad7e00048129c9" />
      </Modal>
      <Modal ref={modalRef4}>
        <ModalModules ref={modalRef4} formDisplayed="recruit-form" formMembership="60e7014e9a642e000469aee9" />
      </Modal>
    </div>
  )
}

export default Memberships
