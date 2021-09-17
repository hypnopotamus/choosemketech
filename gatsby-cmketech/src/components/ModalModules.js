import React, { forwardRef, useState, useEffect } from "react"
import FormInput from "./FormInput"
import { recruitLogo, userLogo } from "../assets/assets"
import UploadImages from "./UploadImage"

const ModalModules = forwardRef((props, ref) => {
  const [formDisplayed, setFormDisplayed] = useState(props.formDisplayed)
  const [formMembership, setFormMembership] = useState(props.formMembership)
  const [newImage, setLogoImage] = useState("")
  const [newBgColor, setNewBgColor] = useState("")

  const handleFormChange = (e, form) => {
    e.preventDefault()
    const jobForm = "job-form"
    const recruitForm = "recruit-form"
    const loginForm = "login"
    const forgotForm = "forgotLogin"
    const logoUpload = "logoUpload"
    const headerUpload = "headerUpload"

    if (form === formDisplayed) {
      return
    } else if (form === jobForm) {
      setFormDisplayed(jobForm)
    } else if (form === recruitForm) {
      setFormDisplayed(recruitForm)
    } else if (form === loginForm) {
      setFormDisplayed(loginForm)
    } else if (form === forgotForm) {
      setFormDisplayed(forgotForm)
    } else if (form === logoUpload) {
      setFormDisplayed(logoUpload)
    } else if (form === headerUpload) {
      setFormDisplayed(headerUpload)
    }
  }

  useEffect(() => {
    if (window.MemberStack) {
      window.MemberStack.reload()
    }
  }, [formDisplayed])

  const Login = () => {
    return (
      <div className="loginModal">
        <div className="loginModal__form">
          <h5>Returning User</h5>
          <h3>Welcome Back!</h3>
          {formDisplayed === "login" && <LoginForm />}
          {formDisplayed === "forgotLogin" && <ForgotForm />}
        </div>
        <div className="loginModal__signup">
          <div className="loginModal__signup__close">
            <button type="button" onClick={() => ref.current.closeModal()}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <h5>New to Choose MKE Tech?</h5>
          <a href="#" onClick={(e) => handleFormChange(e, "job-form")}>
            <h3>Create Your Account</h3>
          </a>
          <button className="button button--tertiary" onClick={(e) => handleFormChange(e, "job-form")}>
            Sign Up Now
          </button>
        </div>
      </div>
    )
  }

  const LoginForm = () => {
    return (
      <>
        <form data-ms-form="login" noValidate>
          <FormInput name="email" type="email" required label="Email" memberstack="email" />

          <FormInput name="password" type="password" required label="Password" memberstack="password" />
          <a href="#" onClick={(e) => handleFormChange(e, "forgotLogin")}>
            Forgot Password?
          </a>
          <div className="loginModal__actions">
            <button className="button button--primary" type="submit">
              Log In To Portal
            </button>
            <a href="#" className="link--plain" onClick={() => ref.current.closeModal()}>
              Cancel
            </a>
          </div>
        </form>
      </>
    )
  }
  const ForgotForm = () => {
    return (
      <form>
        <FormInput name="email" type="text" required label="Email" />
        <div className="loginModal__actions">
          <button className="button button--primary">Reset Password</button>
          <a href="#" className="link--plain" onClick={() => ref.current.closeModal()}>
            Cancel
          </a>
        </div>
      </form>
    )
  }

  const UploadForm = () => {
    if (newImage) {
      useEffect(() => {
        props.transferImage(newImage)
      }, [])
    }
    if (newBgColor) {
      useEffect(() => {
        props.transferColor(newBgColor)
      }, [])
    }
    return (
      <>
        <UploadImages upload={props.data} modal={ref} changeBgColor={(newBgColor) => setNewBgColor(newBgColor)} changeImage={(newImage) => setLogoImage(newImage)} />
      </>
    )
  }

  const SignUp = () => {
    return (
      <div className="user-signup">
        <div className="user-signup__close">
          <button type="button" onClick={() => ref.current.closeModal()}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="user-signup__tab-group">
          <div className="user-signup__tab-group-tab">
            <a href="#" className={formDisplayed === "job-form" ? "active" : ""} onClick={(e) => handleFormChange(e, "job-form")}>
              I'm Looking for a Job
            </a>
          </div>
          <div className="user-signup__tab-group-tab">
            <a className={formDisplayed === "recruit-form" ? "active" : ""} onClick={(e) => handleFormChange(e, "recruit-form")} href="#">
              I'm Looking to Recruit
            </a>
          </div>
        </div>
        {formDisplayed === "job-form" && <JobForm />}
        {formDisplayed === "recruit-form" && <RecruitForm />}
      </div>
    )
  }

  const JobForm = () => {
    const [passwordMatches, setpasswordMatches] = useState()
    let userPassword
    let userConfirmPassword
    if (window.MemberStack) {
      window.MemberStack.reload()
    }
    const handlePasswordMatch = () => {
      userPassword = document.getElementById("password").value
      userConfirmPassword = document.getElementById("passwordConfirm").value
      if (userPassword !== "" && userConfirmPassword !== "") {
        if (userPassword !== userConfirmPassword) {
          setpasswordMatches("Passwords do not match")
        } else {
          setpasswordMatches(undefined)
        }
      }
    }
    return (
      <div className="user-signup__form user-signup__form--job">
        <div className="user-signup__content">
          <img className="user-signup__logo" src={userLogo} alt="" role="presentation" />
          <h3>Create a Profile</h3>
          <a href="#" onClick={(e) => handleFormChange(e, "login")}>
            Already have an account? Login
          </a>
        </div>
        <form className="form" data-ms-form="signup" data-ms-membership="611f2f880c5af90004207432">
          <div className={`form-field half-length`}>
            <label htmlFor="email">Email</label>
            <span className="form-field__input-container">
              <input id="email" name="email" type="email" required data-ms-member="email" />
            </span>
          </div>

          <FormInput name="password" type="password" required label="Password" halfLength={true} memberstack="password" value={userPassword} onChange={() => handlePasswordMatch("password")} error={passwordMatches} />
          <FormInput name="passwordConfirm" type="password" required label="Confirm Password" halfLength={true} value={userConfirmPassword} onChange={() => handlePasswordMatch("passwordConfirm")} error={passwordMatches} />
          <FormInput name="Job Opportunities" type="checkbox" label="I agree to recieve emails from employers about potential job oppotunities" memberstack="job-opportunities-opt-in" />
          <FormInput name="Latest News" type="checkbox" label="Sign me up for Chooose MKE Tech news, such as meetups, tech related news, and more." memberstack="subscription-notifications" />
          <div className="user-signup__content">
            <p>
              By signing up, you are agreeing to the Choose MKE Tech's{" "}
              <a href="/terms-of-use" onClick={() => ref.current.closeModal()}>
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="user-signup__actions">
            <button id="submitButton" className="button button--primary" type="submit" disabled={passwordMatches != undefined}>
              Create My Profile
            </button>
            <a href="#" className="link--plain" onClick={() => ref.current.closeModal()}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    )
  }

  const RecruitForm = () => {
    return (
      <div className="user-signup__form user-signup__form--recruit">
        <div className="user-signup__content">
          <img className="user-signup__logo" src={recruitLogo} alt="" role="presentation" />
          <h3>Recruit with Us</h3>
        </div>
        <form className="form" data-ms-form="signup" data-ms-membership={formMembership}>
          <FormInput name="CompanyName" type="text" label="Company Name" halfLength={true} memberstack="company-name" required={true} />
          <FormInput name="CompanyURL" type="text" label="Company Url" halfLength={true} memberstack="company-url" required={true} />
          <FormInput name="email" type="text" required label="Email" halfLength={true} memberstack="email" required={true} />
          <FormInput name="password" type="password" required label="Password" halfLength={true} memberstack="password" required={true} />
          <FormInput name="passwordConfirm" type="password" label="Confirm Password" halfLength={true} />
          <div className="user-signup__content">
            <a href="#" onClick={(e) => handleFormChange(e, "login")}>
              Already have an account? Login
            </a>
          </div>
          <div className="user-signup__actions">
            <button className="button button--primary" type="submit">
              Create My Profile
            </button>
            <a href="#" className="link--plain" onClick={() => ref.current.closeModal()}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    )
  }

  if (formDisplayed === "logoUpload" || formDisplayed === "headerUpload") {
    return <UploadForm />
  }

  if (formDisplayed === "job-form" || formDisplayed === "recruit-form") {
    return <SignUp />
  } else {
    return <Login />
  }
})

export default ModalModules
