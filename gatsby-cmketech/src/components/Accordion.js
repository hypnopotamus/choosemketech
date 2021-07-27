import React, { useState } from "react"
import { Link } from "gatsby"

const Accordion = ({ id }) => {
    const [selectedAction, setSelectedAction] = useState(null)

    const MOCK_DATA = [
        {
            id: 1,
            header: `Lorem Ipsum 2`,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut id purus at felis suscipit consequat id nec
                    magna. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Nam purus
                    odio, tempor sed justo non, tincidunt suscipit leo.
                    Suspendisse et nibh nec neque iaculis molestie
                    lacinia id nisl. Nullam nisl metus, semper ac erat
                    ut, suscipit ullamcorper odio. Nunc et metus ut odio
                    posuere ultricies in id erat. Quisque luctus posuere
                    est ut facilisis. Morbi auctor, justo blandit
                    vehicula fringilla, sem erat commodo nulla, at
                    scelerisque tellus turpis eget risus. Donec et nulla
                    in elit aliquet molestie. Suspendisse varius finibus
                    aliquam. Donec laoreet interdum elit et malesuada.
                    Nullam pharetra felis vitae lorem pulvinar, rutrum
                    viverra urna aliquet.`,
        },
        {
            id: 2,
            header: `Lorem Ipsum 2`,
            text: ` Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut id purus at felis suscipit consequat id nec
                    magna. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Nam purus
                    odio, tempor sed justo non, tincidunt suscipit leo.
                    Suspendisse et nibh nec neque iaculis molestie
                    lacinia id nisl. Nullam nisl metus, semper ac erat
                    ut, suscipit ullamcorper odio. Nunc et metus ut odio
                    posuere ultricies in id erat. Quisque luctus posuere
                    est ut facilisis. Morbi auctor, justo blandit
                    vehicula fringilla, sem erat commodo nulla, at
                    scelerisque tellus turpis eget risus. Donec et nulla
                    in elit aliquet molestie. Suspendisse varius finibus
                    aliquam. Donec laoreet interdum elit et malesuada.
                    Nullam pharetra felis vitae lorem pulvinar, rutrum
                    viverra urna aliquet.`,
        },
    ]

    const handleAccordionClick = (i) => {
        if (selectedAction === i) {
            return setSelectedAction(null)
        }
        setSelectedAction(i)
    }

    return (
        <>
            {MOCK_DATA.map((el, idx) => {
                return (
                    <div
                        className={
                            selectedAction ? `accordion--active` : `accordion`
                        }
                        key={idx}
                    >
                        <section
                            className={
                                selectedAction
                                    ? `accordion--header__active`
                                    : `accordion--header`
                            }
                        >
                            {selectedAction ? (
                                <h5>{el.header}</h5>
                            ) : (
                                <h5>{el.header}</h5>
                            )}

                            <i
                                class={`fas ${
                                    selectedAction ? `fa-minus` : `fa-plus`
                                }`}
                                onClick={handleAccordionClick}
                            ></i>
                        </section>
                        {selectedAction ? (
                            <section className="accordion--content">
                                <div className="accordion--content__subheader"></div>
                                <p>{el.text}</p>
                            </section>
                        ) : null}
                    </div>
                )
            })}
        </>
    )
}

export default Accordion
