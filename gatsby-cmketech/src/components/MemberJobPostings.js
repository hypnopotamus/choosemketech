import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import JobPostingCard from "./JobPostingCard"

const MembershipJobPostings = ({ data }) => {
    const [memberPosts, setMemberPosts] = useState([])
    const {
        allWpJobPost: {
            nodes: postings
        },
    } = useStaticQuery(graphql`
            query jobPostings {
              allWpJobPost {
                nodes {
                  id
                  memberStackId
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
                .then(member => setMemberPosts(postings.filter(p => p.memberStackId === member.id)))
                .catch(e => console.log(e))
        }
    }, [])

    return memberPosts.map(p => <JobPostingCard posting={p} />)
};

export default MembershipJobPostings;