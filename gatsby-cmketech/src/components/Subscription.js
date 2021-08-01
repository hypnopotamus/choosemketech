import React from "react";
import { Link } from "gatsby";

const Subscription = ({}) => {
    return (
        <div className="subscription container">
            <div className="row">
                <form>
                    <label for="subscribe">Stay In the Loop!</label>
                    <div className="input--group">
                        <input type="text" value="" id="subscribe" />
                        <button type="submit" className="">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Subscription;