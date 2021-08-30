import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({heroModifier, intro}) => {
    
    const data = intro;

    console.log(data)

    let linkButton;

    if (data.subHeroButtonUrl || data.subHeroButtonLabel) {
        linkButton = <Link to={data.subHeroButtonUrl} className="button button--primary">{data.subHeroButtonLabel}</Link>
    }

    return (
        <div className="row">
            <section className={heroModifier ? `sub-intro sub-intro-copy--hero` : `sub-intro-copy`}>
                <h2 dangerouslySetInnerHTML={ {__html: data.subHeroTitle} }></h2>
                <h3 dangerouslySetInnerHTML={ {__html: data.subHeroSubTitle} }></h3>
                <div dangerouslySetInnerHTML={ {__html: data.subHeroContent} }></div>
                { linkButton }
            </section>
        </div>
    )
}

export default IntroCopy