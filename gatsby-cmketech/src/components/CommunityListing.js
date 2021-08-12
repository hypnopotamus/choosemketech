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
            ListTitle: `Company Entry Member Name Milwaukee, WI. Company Entry Member Name Milwaukee, WI. Company Entry Member Name Milwaukee, WI. Company Entry Member Name Milwaukee, WI.`,
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
        <section className="community-listing container">
            <ul className="community-listing--lists">
                <p>Other Choose MKE Tech Members</p>
                {MOCK_DATA.map((listing, index) => {
                    return (
                        <li key={index}>
                            <a href="#">{listing.ListTitle}</a>
                        </li>
                    )
                })}
            </ul>
            <section>
                <div className="community-listing--cta cl-cta-upgrade">
                    <h3>Want more prominence in the search results?</h3>
                    <p>Upgrade your profile today to see your logo!</p>
                    <button class="button--tertiary">Upgrade my profile</button>
                </div>
                <div className="community-listing--cta cl-cta-recruit">
                    <h3>Are you an advocate for technology in Milwaukee?</h3>
                    <p>
                        Join Choose MKE Tech and see your company listed in the
                        search results.
                    </p>
                    <button class="button--secondary">Recruit with us</button>
                </div>
            </section>
        </section>
    )
}

export default CommunityListing
