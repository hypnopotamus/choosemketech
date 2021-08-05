import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({overlap}) => {
    return (
        <div className="row">
            <section className={overlap ? `intro intro-copy intro-copy--mobile ` : `intro intro-copy`}>
                <h2>Choose Milwaukee Tech</h2>
                <h3>Voted Best City for Startups in Tech</h3>
                <p>Find your next job in tech in the Midwest’s hottest rising tech hub. Milwaukee is home to household names in tech, globally recognized water technology, exciting start-ups, and a vibrant tech community eager to explore the next emerging technology. <strong>Come see what’s brewing in Milwaukee.</strong></p>
                <button className="button--primary">Button Style 1</button>
            </section>
        </div>
    )
}

export default IntroCopy
