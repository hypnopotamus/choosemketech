import React from "react"

const IntroCopy = ({heroModifier, intro}) => {
    
    const data = intro.wpPage.Pages_CF;

    return (
        <div className="row">
            <section className={heroModifier ? `intro intro-copy--hero` : `intro-copy`}>
                <h2 dangerouslySetInnerHTML={ {__html: data.introTitle} }></h2>
                <h3 dangerouslySetInnerHTML={ {__html: data.introSubTitle} }></h3>
                <div dangerouslySetInnerHTML={ {__html: data.introContent} }></div>
            </section>
        </div>
    )
}

export default IntroCopy