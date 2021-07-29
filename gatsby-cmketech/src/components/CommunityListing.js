import React from "react"
import { Link } from "gatsby"

const CommunityListing = ({}) => {
    const MOCK_DATA = [
        {
            id: 0,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 1,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 2,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 3,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 4,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 5,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 6,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 7,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 8,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 9,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
        {
            id: 10,
            ListTitle: `Company Entry Member Name Milwaukee, WI.`,
        },
    ]

    return (
        <section className="Community-Listing container">
            <p>Other Choose MKE Tech Members</p>
            <ul className="Community-Listing--lists">
                {MOCK_DATA.map((listing, index) => {
                    return (
                        <li key={index}>
                            <a href="#">{listing.ListTitle}</a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default CommunityListing
