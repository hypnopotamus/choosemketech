import React, {forwardRef} from 'react';
import FormInput from "./FormInput";

const UserSignup = forwardRef((props,ref) => {
    
    return (
        <div className="user-signup">
            <div className="user-signup__close">X</div>
            <div className="user-signup__tab-group">
                <div className="user-signup__tab-group-tab">
                    <a href="#">I'm Looking for a Job</a>
                </div>
                <div className="user-signup__tab-group-tab">
                    <a href="#">I'm Looking to Recruit</a>
                </div>
            </div>
            <div className="user-signup__form">
                <form>
                    <FormInput 
                        name="email"
                        type="text"
                        required
                        label="Email"
                    />
                    <FormInput 
                        name="password"
                        type="password"
                        required
                        label="Password"
                    />
                    <FormInput 
                        name="passwordConfirm"
                        type="password"
                        required
                        label="Confirm Password"
                    />
                    <FormInput 
                        name="Job Opportunities"
                        type="checkbox"
                        label="I agree to recieve emails from employers about potential job oppotunities"
                    />
                    <FormInput 
                        name="Latest News"
                        type="checkbox"
                        label="Sign me up for Chooose MKE Tech news, such as meetups, tech related news, and more."
                    />
                </form>
            </div>
            <div className="user-signup__actions">
                <button className="button button--primary">Create My Profile</button>
                <button onClick={()=> ref.current.closeModal()}>Cancel</button>
            </div>
        </div>
    )
})

export default UserSignup