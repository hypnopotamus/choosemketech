import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({ heroModifier, headline, subheader, copy, button, ...props}) => {
    return (
        <div className="row">
            <section className={heroModifier ? `intro intro-copy--hero` : `intro-copy`}>
                <h2>{headline}</h2>
                <h3>{subheader}</h3>
                <div dangerouslySetInnerHTML={{ __html: copy }}>
                
                </div>
                {button &&  <button className="button--primary">Button Style 1</button>}
                
                
            </section>
        </div>
    )
}

export default IntroCopy