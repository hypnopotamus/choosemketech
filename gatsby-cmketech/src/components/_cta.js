import React from "react"
import { Link } from "gatsby"

const CallToAction = ({cta}) => {

    let ctaHeader,
        ctaButton,
        ctaLink;

    if(cta.ctaHeader) {
        ctaHeader = <h2>{cta.cta.Header}</h2>
    }
    if(cta.ctaButtonLabel) {
        ctaButton = <Link to={cta.ctaButtonUrl} className="button button--primary">{cta.ctaButtonLabel}</Link>
    }

    if(cta.ctaLinkLabel) {
        ctaLink = <Link to={cta.ctaLinkUrl} className="button button--primary">{cta.ctaLinkLabel}</Link>
    }

    return (
        <>
            <div className="cta cta--background-default">
                <div className="cta__header">
                    { ctaHeader }
                </div>
                <div className="cta__controls">
                    { ctaButton } { ctaLink }
                </div>
            </div>
        </>
    )

}

export default CallToAction