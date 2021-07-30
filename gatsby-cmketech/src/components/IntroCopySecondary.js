import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({}) => {
    return (
        <section className="intro intro-copy--secondary__container container">
            <div className="intro-copy--image">
                <img
                    src="https://via.placeholder.com/1279x853"
                    alt="image alt text"
                />
            </div>
            <div className="intro-copy--secondary">
                <h2>Choose Milwaukee Tech</h2>
                <h3>Community &amp; Careers –&nbsp;new Website coming soon</h3>
                <p>
                    The Milwaukee Tech Hub Coalition is brewing up a home-base
                    for tech candidates and top companies to connect, building
                    careers and community along the way.
                    <strong>
                        To stay in the loop about upcoming tech jobs, events,
                        and the MKE tech scene, sign up for updates below.
                    </strong>
                </p>
                <button className="button--primary">Button Style 1</button>
            </div>
        </section>
    )
}

export default IntroCopy
