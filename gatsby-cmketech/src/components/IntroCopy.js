import React from "react"

const IntroCopy = ({heroModifier, headline, subheader, copy, intro}) => {
    

    return (
        <div className="row">
            <section className={heroModifier ? `intro intro-copy--hero` : `intro-copy`} tabIndex="0">
                <h2 dangerouslySetInnerHTML={ {__html: headline} }></h2>
                <h3 dangerouslySetInnerHTML={ {__html: subheader} }></h3>
                <div dangerouslySetInnerHTML={ {__html: copy} }></div>
            </section>
        </div>
    )
}

export default IntroCopy