import React from "react"
import { Link } from "gatsby"

const IntroCopy = ({ heroModifier, intro }) => {
  let linkButton, subContent

  if (intro.subHeroButtonUrl || intro.subHeroButtonLabel) {
    linkButton = (
      <Link to={intro.subHeroButtonUrl} className="button button--primary">
        {intro.subHeroButtonLabel}
      </Link>
    )
  }

  if (intro.subHeroContent) {
    subContent = <div dangerouslySetInnerHTML={{ __html: intro.subHeroContent }}></div>
  }

  return (
    <div className="row">
      <section className={heroModifier ? `sub-intro sub-intro-copy--hero` : `sub-intro-copy`}>
        <h1 dangerouslySetInnerHTML={{ __html: intro.subHeroTitle }}></h1>
        <h2 dangerouslySetInnerHTML={{ __html: intro.subHeroSubTitle }}></h2>
        {subContent}
        {linkButton}
      </section>
    </div>
  )
}

export default IntroCopy
