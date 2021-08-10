import React, { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const Accordion = ({ tagName, content }) => {
    const [selectedAction, setSelectedAction] = useState(null);
    const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

    const MOCK_DATA = [
        {
            id: 1,
            tagName: `Lorem Ipsum`,
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
            tagName: `Lorem Ipsum 2 the sequel`,
            text: ` Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut id purus at felis suscipit consequat id nec
                    magna. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Nam purus
                    odio, tempor sed justo non, tincidunt suscipit leo.
                    Suspendisse et nibh nec neque iaculis molestie
                  `,
        },
        {
            id: 3,
            tagName: `Stress test of how many characters can go here elwejwelkjwekjwkejlkwje`,
            text: ` Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Ut id purus at felis suscipit consequat id nec
                    magna. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Nam purus
                    odio, tempor sed justo non, tincidunt suscipit leo.
                    Suspendisse et nibh nec neque iaculis molestie
                  `,
        },
    ]

    const handleAccordionClick = (i) => {
        if (selectedAction === i) {
            return setSelectedAction(null)
        }
        setSelectedAction(i)
    }

    return (
        <div className="row">
            {MOCK_DATA.map((el, idx) => {
                return (
                    <div className="accordions" key={el.id}>
                        <div className={selectedAction == idx ? `accordion--active` : `accordion` } key={idx} onClick={() => handleAccordionClick(idx)}> 
                            <section className={selectedAction == idx  ? `accordion--header__active` : `accordion--header`}>
                                <h5>{el.tagName}</h5>
                                <i className={`fas ${selectedAction == idx ? `fa-minus` : `fa-plus`}`}></i>
                            </section>
                            {selectedAction == idx  ? (
                                <section className="accordion--content">
                                    <div className="accordion--content__subheader"></div>
                                    <p>{el.text}</p>
                                </section>
                            ) : null
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Accordion
