import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({heroModifier, intro}) => {
    
    const data = intro;

    return (
        <div className="row">
            <section className={heroModifier ? `sub-intro sub-intro-copy--hero` : `sub-intro-copy`}>
                <h2 dangerouslySetInnerHTML={ {__html: data.subHeroTitle} }></h2>
                <h3 dangerouslySetInnerHTML={ {__html: data.subHeroSubTitle} }></h3>
                <div dangerouslySetInnerHTML={ {__html: data.subHeroContent} }></div>
                <Link to={data.subHeroButtonUrl} className="button button--primary">{data.subHeroButtonLabel}</Link>
            </section>
        </div>
    )
}

export default IntroCopy