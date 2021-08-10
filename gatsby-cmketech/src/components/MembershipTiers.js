import React from "react"
import { Link } from "gatsby"

const MembershipTiers = ({}) => {
    return (
        <section className="memberships--tier container">
            <div className="memberships--perks">
                <h4>INCLUDES</h4>
                <p>Member Benefits</p>
                <label>Company Profile Listing</label>
                <label>Link To Job Board</label>
                <label>Tech Company Listing</label>
                <label>Top Job Search Placement</label>
                <label>Job Listings</label>
            </div>
            <div className="memberships--tiers">
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
            </div>
        </section>
    )
}

export default MembershipTiers
