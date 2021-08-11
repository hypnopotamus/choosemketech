import React from "react"
import { Link } from "gatsby"

const MembershipTiers = ({}) => {
    const TIER_DATA = [
        {
            tier: "Includes",
            subtext: "Member Benefits",
            company_profile_listing: "Company Profile Listing",
            link_job_board: "Link to Job Board",
            tech_company_listing: "Tech Company Listing",
            top_job_search_placement: "Top Job Search Placement",
            job_listings: "Job Listings",
            profile_listing: "Profile Listing",
            featured_jobs: "Featured Jobs",
            community_spotlight: "Community Spotlight",
        },
        {
            tier: "PREMIUM",
            subtext: "For mid to large tech employers",
            company_profile_listing: true,
            link_job_board: true,
            tech_company_listing: "Premium Placement",
            top_job_search_placement: true,
            job_listings: "12/months",
            profile_listing: "4/year",
            featured_jobs: "2/month",
            community_spotlight: "2/month",
        },
        {
            tier: "ENHANCED",
            subtext: "For mid to large tech employers",
            company_profile_listing: true,
            link_job_board: true,
            tech_company_listing: "Featured",
            top_job_search_placement: true,
            job_listings: "7/months",
            profile_listing: "2/year",
            featured_jobs: "1/month",
            community_spotlight: "1/month",
        },
        {
            tier: "BASE",
            subtext: "For small tech employers",
            company_profile_listing: true,
            link_job_board: true,
            tech_company_listing: "Limited Details",
            top_job_search_placement: false,
            job_listings: "2/month",
            profile_listing: "1/year",
            featured_jobs: false,
            community_spotlight: false,
        },
        {
            tier: "ENTRY",
            subtext: "For startups + engaged community members",
            company_profile_listing: true,
            link_job_board: true,
            tech_company_listing: "Name and Location only",
            top_job_search_placement: false,
            job_listings: "Available for purchase",
            profile_listing: false,
            featured_jobs: false,
            community_spotlight: false,
        },
    ]

    return (
        <>
            <section class="tier-grid-container container">
                {/* PERKS */}
                <div class="tier-grid--perks">
                    <div>
                        <h4>Includes</h4>
                        <h4>Member Benefits</h4>
                    </div>
                </div>
                {/* TIERS */}
                <div class="tier-grid--tiers">
                    <div>
                        <h4>Premium</h4>
                        <p>For enterprise tech companies</p>
                    </div>
                </div>
                <div class="tier-grid--tiers">
                    <div>
                        <h4>Enhanced</h4>
                        <p>For mid to large tech employers</p>
                    </div>
                </div>
                <div class="tier-grid--tiers">
                    <div>
                        <h4>Base</h4>
                        <p>For small tech employers</p>
                    </div>
                </div>
                <div class="tier-grid--tiers">
                    <div>
                        <h4>Entry</h4>
                        <p>For startups + engaged community members</p>
                    </div>
                </div>
                <div class="tier-grid--perks">
                    <p>Company Profile Listing</p>
                </div>
                {/* FEATURES */}
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Link to Job Board</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Tech Company Listing</p>
                </div>
                <div class="tier-grid--features">
                    <p>Premium Placement</p>
                </div>
                <div class="tier-grid--features">
                    <p>Featured</p>
                </div>
                <div class="tier-grid--features">
                    <p>Limited Details</p>
                </div>
                <div class="tier-grid--features">
                    <p>Name and Location only</p>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Top Job Search Placement</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Job Listings</p>
                </div>
                <div class="tier-grid--features">
                    <p>12/month</p>
                </div>
                <div class="tier-grid--features">
                    <p>7/month</p>
                </div>
                <div class="tier-grid--features">
                    <p>2/month</p>
                </div>
                <div class="tier-grid--features">
                    <p>Available for purchase</p>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <h4>Homepage Features</h4>
                </div>
                <div class="tier-grid--features" id="testingGrid">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Profile Listing</p>
                </div>
                <div class="tier-grid--features">
                    <p>4/year</p>
                </div>
                <div class="tier-grid--features">
                    <p>2/year</p>
                </div>
                <div class="tier-grid--features">
                    <p>1/year</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Featured Jobs</p>
                </div>
                <div class="tier-grid--features">
                    <p>2/month</p>
                </div>
                <div class="tier-grid--features">
                    <p>1/month</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Community Spotlight</p>
                </div>
                <div class="tier-grid--features">
                    <p>2/month</p>
                </div>
                <div class="tier-grid--features">
                    <p>1/month</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <h4>Company Profile Features</h4>
                </div>
                <div class="tier-grid--features" id="testingGrid">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                <div class="tier-grid--features">
                    <p>-</p>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Social Media Links</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Company Stories</p>
                </div>
                <div class="tier-grid--features">
                    <p>5 stories</p>
                </div>
                <div class="tier-grid--features">
                    <p>3 stories</p>
                </div>
                <div class="tier-grid--features">
                    <p>1 stories</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                {/* New Cycle */}
                <div class="tier-grid--perks">
                    <p>Profile Analytics</p>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-check"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
                <div class="tier-grid--features">
                    <i class="fas fa-times"></i>
                </div>
            </section>
        </>
    )
}

export default MembershipTiers
