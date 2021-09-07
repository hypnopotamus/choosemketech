import React, { useState } from "react"
import PropTypes from "prop-types"
import MultiSelect from "react-multi-select-component"
import Textarea from "./Textarea"

const FormInput = ({ name, type, placeholder, onChange, className, value, error, children, label, email, hidden, file, number, tel, memberstack, required, accept, maxlength, story, ...props }) => {
  const [passwordShown, setPasswordShown] = useState(false)
  const [selected, setSelected] = useState([])
  const handlePasswordClick = (i) => {
    setPasswordShown(!passwordShown)
  }
  switch (type) {
    case "file":
      return (
        <div className={`form-field ${props.halfLength ? "half-length" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <span className="form-field__input-container">
            <input id={name} name={name} type={type} placeholder={placeholder} accept={accept} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} required={required} />
            {error && <i className="fas fa-exclamation-triangle"></i>}
          </span>
          {error && <p className="form-field--error"> {error}</p>}
        </div>
      )
    case "textarea":
      if (story) {
        return (
          <div className="form-field">
            <label htmlFor={name}>{label}</label>
            <span className="form-field__input-container">
              <Textarea limit={700} value={story} memberstack={memberstack} className={className} style={error && { border: "solid 1px #B11030" }} maxlength="700" />
              {error && <i className="fas fa-exclamation-triangle"></i>}
            </span>
            {error && <p className="form-field--error"> {error}</p>}
          </div>
        )
      }
    case "text":
      return (
        <div className={`form-field ${props.halfLength ? "half-length" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <span className="form-field__input-container">
            <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} required={required} />
            {error && <i className="fas fa-exclamation-triangle"></i>}
          </span>
          {error && <p className="form-field--error"> {error}</p>}
        </div>
      )
    case "email":
      return (
        <div className={`form-field ${props.halfLength ? "half-length" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <span className="form-field__input-container">
            <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} />
            {error && <i className="fas fa-exclamation-triangle"></i>}
          </span>
          {error && <p className="form-field--error"> {error}</p>}
        </div>
      )
    case "password":
      return (
        <div className={`form-field ${props.halfLength ? "half-length" : ""}`}>
          <label htmlFor={name}>{label}</label>
          <span className="form-field__input-container">
            <span className="form-field__password-field">
              <input id={name} name={name} type={passwordShown ? "text" : "password"} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} />
              {passwordShown ? (
                <button onClick={() => handlePasswordClick()} className="form-field__password-field__button form-field__password-field__show-button" type="button">
                  <i className="fas fa-eye"></i>
                </button>
              ) : (
                <button onClick={() => handlePasswordClick()} className="form-field__password-field__button form-field__password-field__hide-button" type="button">
                  <i className="fas fa-eye-slash"></i>
                </button>
              )}
            </span>

            {error && <i className="fas fa-exclamation-triangle"></i>}
          </span>
          {error && <p className="form-field--error"> {error}</p>}
        </div>
      )
    case "checkbox":
      if (props.slider) {
        return (
          <div className="form-field form-slider">
            <label htmlFor={name}>{label}</label>
            <span className="form-field__toggle">
              <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} />
              <span className="slider-toggle"></span>
              {error && <i className="fas fa-exclamation-triangle"></i>}
            </span>
            {error && <p className="form-field--error"> {error}</p>}
          </div>
        )
      } else {
        return (
          <div className="form-field checkbox">
            <label htmlFor={name}>{label}</label>
            <span className="form-field__input-container">
              <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} />
              {error && <i className="fas fa-exclamation-triangle"></i>}
            </span>
            {error && <p className="form-field--error"> {error}</p>}
          </div>
        )
      }
    case "radio":
      return (
        <div className="form-field radio">
          <label htmlFor={name}>{label}</label>
          <span className="form-field__input-container">
            <input id={name} name={name} type={type} placeholder={placeholder} onChange={onChange} defaultValue={value} className={className} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack} />
            {error && <i className="fas fa-exclamation-triangle"></i>}
          </span>
          {error && <p className="form-field--error"> {error}</p>}
        </div>
      )
    case "dropdown":
      if (props.multiSelect) {
        return (
          <div className={`form-field dropdown ${props.halfLength ? "half-length" : ""}`}>
            <label htmlFor={name}>{label}</label>
            <MultiSelect options={children} defaultValue={selected} onChange={setSelected} labelledBy="-- Select --" />
          </div>
        )
      } else {
        return (
          <div className={`form-field dropdown ${props.halfLength ? "half-length" : ""}`}>
            <label htmlFor={name}>{label}</label>
            <div className="select-container">
              <div className="select-container__select">
                <select name={name} id={name} style={error && { border: "solid 1px #B11030" }} data-ms-member={memberstack}>
                  <option defaultValue="">-- Select --</option>
                  {children.map((option) => (
                    <option key={option.value}> {option.label}</option>
                  ))}
                </select>
              </div>
              {error && <i className="fas fa-exclamation-triangle"></i>}
            </div>
            {error && <p className="form-field--error"> {error}</p>}
          </div>
        )
      }
  }
}

FormInput.defaultProps = {
  type: "text",
  className: "",
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password", "checkbox", "select", "email", "textarea", "file", "radio", "dropdown"]),
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
}

export default FormInput
