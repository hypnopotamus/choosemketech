import React from "react"
import { Link } from "gatsby"

const MembershipTiers = ({}) => {
    return (
        <>
        <section className="memberships--tier">
            <div className="memberships--perks">
                <h4>INCLUDES</h4>
                <p className="memberships--perks__header">Member Benefits</p>
                <label>Company Profile Listing</label>
                <label>Link To Job Board</label>
                <label>Tech Company Listing</label>
                <label>Top Job Search Placement</label>
                <label>Job Listings</label>
                <p className="memberships--perks__header">Homepage Features</p>
                <label>Profile Listing</label>
                <label>Featured Jobs</label>
                <label>Community Spotlight</label>
                <p className="memberships--perks__header">
                    Company Profile Features
                </p>
                <label>Social Media Links</label>
                <label>Company Stories</label>
                <label>Profile</label>
            </div>
            <section className="memberships--tiers__header ">
                <h4>Premiere</h4>
                <h4>Enhanced</h4>
                <h4>Base</h4>
                <h4>Entry</h4>
            </section>
        </section>

            <section  className="memberships--features">
                <div>
                <i class="fas fa-check"></i>
                </div>
            </section>
        </>
    )
}

export default MembershipTiers

/*
Back up 
         <section className="memberships--tier container">
            <div className="memberships--perks">
                <h4>INCLUDES</h4>
                <p className="memberships--perks__header">Member Benefits</p>
                <label>Company Profile Listing</label>
                <label>Link To Job Board</label>
                <label>Tech Company Listing</label>
                <label>Top Job Search Placement</label>
                <label>Job Listings</label>
                <p className="memberships--perks__header">Homepage Features</p>
                <label>Profile Listing</label>
                <label>Featured Jobs</label>
                <label>Community Spotlight</label>
                <p className="memberships--perks__header">
                    Company Profile Features
                </p>
                <label>Social Media Links</label>
                <label>Company Stories</label>
                <label>Profile</label>
            </div>
            <div className="memberships--tiers__header">
                <section className="memberships--feature__grid">
                    <div>
                        <h4>Premium</h4>
                        <span>For enterprises tech companies</span>
                    </div>
                    <div>
                        <h4>Enhanced</h4>
                        <span>For mid to large tech employers</span>
                    </div>
                    <div>
                        <h4>Base</h4>
                        <span>For small tech employers</span>
                    </div>
                    <div>
                        <h4>Premium</h4>
                        <span>For startups + engaged community members</span>
                    </div>
                </section>
            </div>
            <div class="memberships--features">
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <span>Premium Placement</span>
                <span>Premium Placement</span>
                <span>Limited Details</span>
                <span>Name and Location Only</span>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-times"></i>
                <i class="fas fa-times"></i>
                <span>12/month</span>
                <span>7/month</span>
                <span>2/month</span>
                <span>Available for purchase</span>
            </div>
            <div class="memberships--features">
                <span>4/year</span>
                <span>2/year</span>
                <span>1/year</span>
                <i class="fas fa-times"></i>
                <span>2/month</span>
                <span>1/month</span>
                <i class="fas fa-times"></i>
                <i class="fas fa-times"></i>
                <span>2/month</span>
                <span>1/month</span>
                <i class="fas fa-times"></i>
                <i class="fas fa-times"></i>
            </div>
            <div class="memberships--features">
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-times"></i>
                <i class="fas fa-times"></i>
                <span>5 stories</span>
                <span>3 stories</span>
                <span>1 stories</span>
                <i class="fas fa-times"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-check"></i>
                <i class="fas fa-times"></i>
                <i class="fas fa-times"></i>
            </div>
        </section>

 
        */
