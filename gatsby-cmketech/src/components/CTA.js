import React from "react"
import { Link } from "gatsby"

const CallToAction = ({cta}) => {

    let ctaHeader,
        ctaButton,
        ctaLink,
        ctaBackground;

    if(cta.ctaHeader) {
        ctaHeader = <h2>{cta.ctaHeader}</h2>
    }
    if(cta.ctaButtonLabel) {
        ctaButton = <Link to={cta.ctaButtonUrl} className="button button--primary">{cta.ctaButtonLabel}</Link>
    }

    if(cta.ctaLinkLabel) {
        ctaLink = <Link to={cta.ctaLinkUrl} className="link">{cta.ctaLinkLabel}</Link>
    }

    if(cta.ctaBackgroundImage) {
        ctaBackground = true;
    }

    return (
        <>
            <div className={ctaBackground ? `cta` : `cta cta--background-default`} style={{ backgroundImage : `url(${cta.ctaBackgroundImage.sourceUrl})` }}>
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