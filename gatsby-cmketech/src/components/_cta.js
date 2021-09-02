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
        ctaLink = <Link to={cta.ctaLinkUrl} className="button button--primary">{cta.ctaLinkLabel}</Link>
    }

    if(cta.ctaBackgroundImage) {
        ctaBackground = true;
    }
    const ctaBgImage = {
        backgroundImage : cta.ctaBackgroundImage
    }

    return (
        <>
            <div className={ctaBackground ? `cta` : `cta cta--background-default`} style={ctaBgImage}>
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