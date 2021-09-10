import { Link } from "gatsby";
import React from "react"
import Layout from "../components/Layout"

const NotFound = () => {

  return (
    <Layout>
      <div className="container text-center">
        <h1>Oops, that's a 404</h1>
        <p>We can't find the page that you're looking for.</p>
        <Link className="button button--primary" to="/"> Return To Home</Link>
      </div>
    </Layout>
  )

}

export default NotFound;
