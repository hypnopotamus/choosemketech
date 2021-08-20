import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

const Subscription = ({}) => {
    return (
        <div className="subscription">
            <label htmlFor="subscribe">Stay In the Loop!</label>
            <div className="ctct-inline-form" data-form-id="ac8c28f2-0b36-4119-b5b8-7cf578ec606a"></div>
            <Helmet>
                <script> var _ctct_m = "e38b9bfc0081b96dd4b92db0d906ded2"; </script>,
                <script id="signupScript" src="https://static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js" async defer></script>,
            </Helmet>
        </div>
    )
}

export default Subscription;