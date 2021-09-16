import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ crumbs }) => {
  return (
    <>
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ol className="breadcrumb__list">
          {crumbs.map((crumb, index) => {
            console.log(crumb)
            return (
              <li className="breadcrumb__item" key={index}>
                <Link className="breadcrumb__link" to={crumb.pathname}>
                  {crumb.crumbLabel}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
