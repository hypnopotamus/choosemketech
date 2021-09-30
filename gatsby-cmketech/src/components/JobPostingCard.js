import React from "react"

//todo consolidate into a single map with the job-postings page
const jobCategories = [
    ["Software Developer", {
        categoryClass: "tag tag--green tag--green--engineer",
        displayName: "Software Developer"
    }],
    ["Data + Analytics", {
        categoryClass: "tag tag--green tag--green--data",
        displayName: "Data/Analytics"
    }],
    ["Sales", {
        categoryClass: "tag tag--green tag--green--sales",
        displayName: "Sales"
    }],
    ["Content", {
        categoryClass: "tag tag--green tag--green--content",
        displayName: "Content"
    }],
    ["Marketing", {
        categoryClass: "tag tag--green tag--green--marketing",
        displayName: "Marketing"
    }],
    ["UX + Design", {
        categoryClass: "tag tag--green tag--green--creative",
        displayName: "UX + Design"
    }],
    ["HR/Admin", {
        categoryClass: "tag tag--green tag--green--admin",
        displayName: "HR/Admin"
    }],
    ["IT", {
        categoryClass: "tag tag--green tag--green--IT",
        displayName: "IT"
    }],
    ["Product", {
        categoryClass: "tag tag--green tag--green--product",
        displayName: "Product"
    }],
    ["Engineer", {
        categoryClass: "tag tag--green tag--green--engineer",
        displayName: "Engineer"
    }],
]

const positionTypes = [
    ["Education", {
        categoryClass: "tag tag--blue tag--blue--education",
        displayName: "Education"
    }],
    ["Finance/Insurance", {
        categoryClass: "tag tag--blue tag--blue--finance",
        displayName: "Finance/Insurance"
    }],
    ["Healthcare", {
        categoryClass: "tag tag--blue tag--blue--healthcare",
        displayName: "Healthcare"
    }],
    ["Retail", {
        categoryClass: "tag tag--blue tag--blue--retail",
        displayName: "Retail"
    }],
    ["Software", {
        categoryClass: "tag tag--blue tag--blue--software",
        displayName: "Software"
    }],
    ["Logistics", {
        categoryClass: "tag tag--blue tag--blue--logistics",
        displayName: "Logistics"
    }],
    ["Travel/Hospitality", {
        categoryClass: "tag tag--blue tag--blue--travel",
        displayName: "Travel/Hospitality"
    }],
    ["Manufacturing", {
        categoryClass: "tag tag--blue tag--blue--manufacturing",
        displayName: "Manufacturing"
    }],
    ["Media", {
        categoryClass: "tag tag--blue tag--blue--news",
        displayName: "Media"
    }],
    ["Tech Services", {
        categoryClass: "tag tag--blue tag--blue--software",
        displayName: "Tech Services"
    }],
    ["Utilities/Water Tech", {
        categoryClass: "tag tag--blue tag--blue--pharma",
        displayName: "Utilities/Water Tech"
    }],
]

const categoryBadgeFactory = categories => badgeFactory(categories, jobCategories)
const jobTypeBadgeFactory = jobTypes => badgeFactory(jobTypes, positionTypes)
const badgeFactory = (categories, categoryMap) =>
    categories?.forEach(c => {
        const { categoryClass, displayName } = categoryMap[c]

        return (
            <span className={categoryClass}>
                {displayName}
            </span>
        )
    })

//todo need edit and delete callbacks
//todo need the company data
//todo fill in the rest of the data (even if it isn't being submitted)

//expecting roleCategory and techStack to be arrays
const JobPostingCard = ({ posting, onEdit, onDelete }) => {
    const { jobPostings: job } = posting

    return (
        <div className="card job-card job-card--featured">
            <div className="job-card__left">
                <div className="job-card__left__heading">
                    <h3>{job.jobTitle}</h3>
                </div>
                <p>
                    {job.jobDescription}
                </p>
                <div className="job-card__left__tags">edit | delete</div>
                <div className="job-card__left__tags">
                    {categoryBadgeFactory(job.roleCategory)}
                    {jobTypeBadgeFactory(job.techStack)}
                    {job.featured &&
                        <span className="tag tag--gold tag--gold--featured">
                            Featured
                        </span>
                    }
                </div>
                <div className="job-card__left__date">
                    <span>Posted {new Date(posting.date).toDateString()}</span>
                </div>
            </div>
            <div className="job-card__right">
                <div className="job-card__right__details">
                    <h5>
                        <i className="fas fa-building" /> nvisia
                    </h5>
                    <h5>
                        <i className="fas fa-map-marker-alt" />{" "}
                        Milwaukee, WI
                    </h5>
                </div>
                <div className="job-card__right__cta">
                    <a className="button button--external button--primary" href={job.url}>
                        Apply For Jobs
                    </a>
                    <a className="link">View Company Profile</a>
                </div>
            </div>
        </div>
    )
}

export default JobPostingCard;