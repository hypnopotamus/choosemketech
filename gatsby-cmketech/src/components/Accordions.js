import React, { useState } from "react"
import { Link } from "gatsby"

const Accordions = ({}) => {
    const [accordion, setAccordion] = useState(false)

    const handleAccordionClick = () => {
        setAccordion(!accordion)
    }

    return (
        <div className="accordion">
            <section className="accordion--header">
                {accordion ? (
                    <h5>Expanded Accordion Heading</h5>
                ) : (
                    <h5>Closed Accordion Heading</h5>
                )}
                {accordion ? (
                    <i class="fas fa-minus" onClick={handleAccordionClick}></i>
                ) : (
                    <i class="fas fa-plus" onClick={handleAccordionClick}></i>
                )}
            </section>
            {accordion ? (
                <section className="accordion--content">
                    <div className="accordion--content__subheader"></div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut id purus at felis suscipit consequat id nec magna.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Nam purus odio, tempor
                        sed justo non, tincidunt suscipit leo. Suspendisse et
                        nibh nec neque iaculis molestie lacinia id nisl. Nullam
                        nisl metus, semper ac erat ut, suscipit ullamcorper
                        odio. Nunc et metus ut odio posuere ultricies in id
                        erat. Quisque luctus posuere est ut facilisis. Morbi
                        auctor, justo blandit vehicula fringilla, sem erat
                        commodo nulla, at scelerisque tellus turpis eget risus.
                        Donec et nulla in elit aliquet molestie. Suspendisse
                        varius finibus aliquam. Donec laoreet interdum elit et
                        malesuada. Nullam pharetra felis vitae lorem pulvinar,
                        rutrum viverra urna aliquet.
                    </p>
                </section>
            ) : null}
        </div>
    )
}

export default Accordions
