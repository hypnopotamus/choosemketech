import React from "react"
import { Link } from "gatsby"
import Tags from "./Tags"

const CardCopy = ({}) => {
    return (
        <div className="container">
            <h2>Company Spotlight</h2>
            <div className="tiles tile--container">
                <div className="tile col">
                    <div className="tile--image">
                        <Tags />
                        <img src="" />
                    </div>
                    <div className="tile--content">
                        <h4>SUBHEADING</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <a href="">invidunt ut</a> labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <a href="">This is a hyper link <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCopy