import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import JobPostingCard from "./JobPostingCard"

const MembershipJobPostings = ({ data }) => {
    const [memberPosts, setMemberPosts] = useState([])
    const [company, setCompany] = useState()
    const { allWpJobPost: { nodes: postings } } = useStaticQuery(graphql`
            query jobPostings {
              allWpJobPost {
                nodes {
                  id
                  title
                  date
                  jobPostings {
                    featured
                    jobDescription
                    jobTitle
                    roleCategory
                    techStack
                    typeOfPosition
                    url
                  }
                }
              }
            }
    `)

    useEffect(() => {
        if (window.MemberStack.onReady) {
            window.MemberStack.onReady
                .then(member => {
                    console.log(member)
                    setCompany({
                        name: member["company-name"],
                        url: member["company-url"],
                        location: member.address
                    })
                    setMemberPosts(postings.filter(p => p.title === member.id))
                })
                .catch(e => console.log(e))
        }
    }, [])

    return memberPosts.map(p => <JobPostingCard posting={p} company={company} />)
};

export default MembershipJobPostings;