import React, { useState } from "react"
import PropTypes from "prop-types"

const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    ...props
}) => {
    const [passwordShown, setPasswordShown] = useState(false)
    const handlePasswordClick = (i) => {
        setPasswordShown(!passwordShown)
    }
    switch (type) {
        case "textarea":
            return (
                <div className="form-field">
                    <label htmlFor={name}>{label}</label>
                    <span className="form-field__input-container">
                        <textarea
                            id={name}
                            name={name}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            className={className}
                            style={error && { border: "solid 1px #B11030" }}
                        ></textarea>
                        {error && <i className="fas fa-exclamation-triangle"></i>}
                    </span>
                    {error && <p className="form-field--error"> {error}</p>}
                </div>
            )
        case "text":
            return (
                <div className="form-field">
                    <label htmlFor={name}>{label}</label>
                    <span className="form-field__input-container">
                        <input
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            className={className}
                            style={error && { border: "solid 1px #B11030" }}
                        />
                        {error && <i className="fas fa-exclamation-triangle"></i>}
                    </span>
                    {error && <p className="form-field--error"> {error}</p>}
                </div>
            )
        case "password":
            return (
                <div className="form-field">
                    <label htmlFor={name}>{label}</label>
                    <span className="form-field__input-container">
                        <span className="form-field__password-field">
                        <input
                            id={name}
                            name={name}
                            type={passwordShown ? 'text' : 'password'}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            className={className}
                            style={error && { border: "solid 1px #B11030" }}
                        />
                        { passwordShown ? (
                            <button onClick={()=>handlePasswordClick()} className="form-field__password-field__button form-field__password-field__show-button" type="button"><i className="fas fa-eye"></i></button>
                        ) : (
                            <button onClick={()=>handlePasswordClick()} className="form-field__password-field__button form-field__password-field__hide-button" type="button"><i className="fas fa-eye-slash"></i></button>                            
                        )}                        
                        </span>
                        

                        {error && <i className="fas fa-exclamation-triangle"></i>}
                    </span>
                    {error && <p className="form-field--error"> {error}</p>}
                </div>
            )
        case "checkbox":
            if(props.slider){
                return(
                    <div className="form-field form-slider">
                    <label htmlFor={name}>{label}</label>
                    <span className="form-field__toggle">
                        <input
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            className={className}
                            style={error && { border: "solid 1px #B11030" }}
                        />
                        <span className="slider-toggle"></span>
                        {error && <i className="fas fa-exclamation-triangle"></i>}
                    </span>
                    {error && <p className="form-field--error"> {error}</p>}
                </div>
                )
            }else {
                return (
                    <div className="form-field checkbox">
                    <label htmlFor={name}>{label}</label>
                    <span className="form-field__input-container">
                        <input
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            onChange={onChange}
                            value={value}
                            className={className}
                            style={error && { border: "solid 1px #B11030" }}
                        />
                        {error && <i className="fas fa-exclamation-triangle"></i>}
                    </span>
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
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "number", "password", "checkbox", "select"]),
    className: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
}

export default FormInput
