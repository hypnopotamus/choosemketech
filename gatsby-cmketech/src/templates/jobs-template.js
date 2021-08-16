import React from "react"

const JobContent = ({ pageContext: { job } }) => (
    <section>
        {job.name} - {job.skill}
    </section>
)

export default JobContent;