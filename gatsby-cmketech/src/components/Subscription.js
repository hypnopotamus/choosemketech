import React, { useState } from "react";
import { Link } from "gatsby";

const Subscription = ({}) => {

    const [inputValue, setInputValue] = useState('')
    const handleOnChange = (inputValue) => {
        setInputValue(inputValue)
    }
    return (
        <div className="subscription">
            <form>
                <label htmlFor="subscribe">Stay In the Loop!</label>
                <div className="input--group">
                    <input type="text" value="" id="subscribe" placeholder="email@address.com" onChange={() => handleOnChange()} />
                    <button type="submit" className="">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Subscription;