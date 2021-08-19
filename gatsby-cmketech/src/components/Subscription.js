import React from "react";
import { Link } from "gatsby";

const Subscription = ({}) => {
    return (
        <div className="subscription">
            <form>
                <label htmlFor="subscribe">Stay In the Loop!</label>
                <div className="input--group">
                    <input type="text" defaultValue="" id="subscribe" placeholder="email@address.com"/>
                    <button type="submit" className="">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Subscription;