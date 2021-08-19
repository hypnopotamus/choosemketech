import React from "react";
import FormInput from "./FormInput"

const Subscription = ({}) => {
    return (
        <div className="subscription">
            <form>
                <label for="subscribe">Stay In the Loop!</label>
                <div className="input--group">
                    <FormInput type="date" id="subscribe" placeholder="email@address.com" />
                    <button type="submit" className="">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Subscription;