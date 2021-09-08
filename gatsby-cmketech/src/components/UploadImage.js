import React from "react"
import { Link } from "gatsby"
import FormInput from "./FormInput"

const UploadImages = ({ upload }) => {
  const changeLogo = (e) => {
    var logoImage = document.getElementById("logoImage")
    logoImage.src = URL.createObjectURL(e.target.files[0])
    logoImage.onload = function () {
      URL.revokeObjectURL(logoImage.src)
    }
  }
  const changeBackground = (e) => {
    var backgroundImage = document.getElementById("backgroundImage")
    backgroundImage.src = URL.createObjectURL(e.target.files[0])
    backgroundImage.onload = function () {
      URL.revokeObjectURL(backgroundImage.src)
    }
    console.log(backgroundImage)
  }

  return (
    <div className="upload--file">
      <div className="uploaded--file">
        <label htmlFor="upload-logo" className="image--file">
          <img src={upload.logo} alt={upload["company-name"]} id="logoImage" />
        </label>
        <FormInput name="upload-logo" type="file" label="Upload Logo" onChange={changeLogo} accept="image/jpeg, image/png, image/svg+xml" />
      </div>
      <div className="uploaded--file">
        <label htmlFor="upload-background-image" className="image--file">
          <img src={upload["background-image"]} alt={upload["company-name"]} id="backgroundImage" />
        </label>
        <FormInput name="upload-background-image" type="file" label="Background Image" onChange={changeBackground} accept="image/jpeg, image/png" />
      </div>
    </div>
  )
}

export default UploadImages
