import React, { useState } from "react"

const Accordion = ({items}) => {
    const [selectedAction, setSelectedAction] = useState(null)

    const handleAccordionClick = (i) => {
        if (selectedAction === i) {
            return setSelectedAction(null)
        }
        setSelectedAction(i)
    }

    return (
        <div className="accordions--wrapper">
            {items.map((el, idx) => {
                console.log(el, idx)
                return (
                    <div className="accordions" key={idx}>
                        <div className={selectedAction == idx ? `accordion--active` : `accordion` } key={idx} onClick={() => handleAccordionClick(idx)}> 
                            <section className={selectedAction == idx  ? `accordion--header__active` : `accordion--header`}>
                                <h5>{el.accordionTitle}</h5>
                                <i className={`fas ${selectedAction == idx ? `fa-minus` : `fa-plus`}`}></i>
                            </section>
                            {selectedAction == idx  ? (
                                <section className="accordion--content">
                                    <div className="accordion--content__subheader"></div>
                                    <div dangerouslySetInnerHTML={{ __html: el.accordionContent }} />
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
