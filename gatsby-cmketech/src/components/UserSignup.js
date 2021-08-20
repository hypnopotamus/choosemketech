import React, {forwardRef, useState} from 'react';
import FormInput from "./FormInput";
import { recruitLogo, userLogo} from "../assets/assets";

const UserSignup = forwardRef((props,ref) => {
    const [formDisplayed, setFormDisplayed] = useState(props.formDisplayed)

    const handleFormChange = (e, form) => {
        e.preventDefault();
        const jobForm = "job-form";
        const recruitForm = "recruit-form";
        if(form === formDisplayed) {
            return
        } 
        else if(form === jobForm) {
            setFormDisplayed(jobForm)
        }
        else if(form === recruitForm) {
            setFormDisplayed(recruitForm)
        }
    };
    
    const JobForm = () => {
        return (
            <div className="user-signup__form user-signup__form--job">
                <div className="user-signup__">

                </div>
                <img className="user-signup__logo" src={userLogo} />
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
        )
    }
    const RecruitForm = () => {
        return (
            <div className="user-signup__form user-signup__form--job">
                <div className="user-signup__">

                </div>
                <img className="user-signup__logo" src={userLogo} />
                <form>                    
                </form>
            </div>
        )
    }

    return (
        <div className="user-signup">
            <div className="user-signup__close">
                <button href="#" onClick={()=>ref.current.closeModal()}>
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div className="user-signup__tab-group">
                <div className="user-signup__tab-group-tab">
                    <a href="#" className={ formDisplayed === "job-form" ? 'active' : ''} onClick={(e)=>handleFormChange(e,"job-form")}>I'm Looking for a Job</a>
                </div>
                <div className="user-signup__tab-group-tab">
                    <a className={ formDisplayed === "recruit-form" ? 'active' : ''} onClick={(e)=>handleFormChange(e,"recruit-form")} href="#">I'm Looking to Recruit</a>
                </div>
            </div>
            {
                formDisplayed === "job-form" ? <JobForm /> : <RecruitForm />
            }
            
            <div className="user-signup__actions">
                <button className="button button--primary">Create My Profile</button>
                <button onClick={()=> ref.current.closeModal()}>Cancel</button>
            </div>
        </div>
    )
})

export default UserSignup