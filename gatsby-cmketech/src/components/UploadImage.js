import React, { useState, useCallback, useEffect, useRef } from "react"
import axios from "axios"

const UploadImages = ({ itemid, upload, modal }) => {
  const imgUpload = useRef()
  const [img, setImg] = useState(upload.src)

  const updateItem = (e) => {
    if (imgUpload.current.files.length > 0) {
      var formData = new FormData()
      let file = imgUpload.current.files[0]

      formData.append("file", file)

      let url = "https://edit.choosemketech.org"

      //const formData = new FormData()
      // const fileField = document.querySelector('input[type="file"]')

      // // formData.append("admin", "Wbcb2739!@#$")
      // formData.append("avatar", fileField.files[0])

      console.log(formData)

      fetch("https://edit.choosemketech.org/wp-json/wp/v2/media", {
        method: "POST",
        mode: "no-cors",
        headers: new Headers({
          "Content-Disposition": "attachment; filename='" + file.name + "'",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "image/png",
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZWRpdC5jaG9vc2Vta2V0ZWNoLm9yZyIsImlhdCI6MTYzMTQ3Mzk1MCwibmJmIjoxNjMxNDczOTUwLCJleHAiOjE2MzIwNzg3NTAsImRhdGEiOnsidXNlciI6eyJpZCI6MSwiZGV2aWNlIjoiIiwicGFzcyI6IjVkOGI2ZWY1OGE3MTY3ZDNiMjQxNmMwNTM3NGE0YjMyIn19fQ.v04r5ia66wR_I1kEBpn2Q4swCq9-7aDlnCmcL3-GVBs",
          // Authorization: "Basic '+btoa('admin:Wbcb2739!@#$')",
        }),
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result)
        })
        .catch((error) => {
          console.error("Error:", error)
        })
    }
  }

  const deleteOrigImg = () => {
    if (origImg) {
      let url = window.ONW.wp_api + "/media/" + origImg + "?force=1"
      axios.delete(url + "/wp-json/wp/v2/media/", header).catch((err) => {
        handleError(context, err)
      })
    }
  }

  const previewImage = (e) => {
    var oFReader = new FileReader()
    oFReader.readAsDataURL(imgUpload.current.files[0])
    oFReader.onload = function (oFREvent) {
      setImg(oFREvent.target.result)
    }
  }
  // const logoModal = useRef()
  // const headerModal = useRef()

  // const [logo, setLogoImage] = useState("")
  // useEffect(() => {
  //   fetch(`https://api.memberstack.com/v1/members/`)
  //     .then((res) => res.json())
  //     .then((json) => console.log(json))
  // }, [logo])

  // const changeLogo = (e) => {
  //   var logoImage = document.getElementById("logoImage")
  //   logoImage.src = URL.createObjectURL(e.target.files[0])
  //   logoImage.onload = function () {
  //     URL.revokeObjectURL(logoImage.src)
  //   }
  // }
  // const changeBackground = (e) => {
  //   var backgroundImage = document.getElementById("backgroundImage")
  //   backgroundImage.src = URL.createObjectURL(e.target.files[0])
  //   backgroundImage.onload = function () {
  //     URL.revokeObjectURL(backgroundImage.src)
  //   }
  // }

  return (
    <>
      <div className={`uploaded-image ${upload.class}`}>
        <div className="uploaded-image__close">
          <button type="button" onClick={() => modal.current.closeModal()}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="uploaded-image__update" style={{ backgroundColor: `${upload.bgcolor}` }}>
          {(() => {
            if (img) {
              return <img src={img} alt="image" />
            }
          })()}
          <div className="uploaded-image__settings">
            <label htmlFor="imgUpload" className="button button--primary">
              <i className="fas fa-camera"></i>
              <input id="imgUpload" type="file" ref={imgUpload} onChange={previewImage} />
            </label>
            {/* <button className="button button--primary">
              <i className="fas fa-palette"></i>
            </button> */}
          </div>
        </div>
        <div className="uploaded-image__actions">
          {/* <label htmlFor="imgUpload" className="button button--primary">
            <span>Upload Image</span>
            <input id="imgUpload" type="file" ref={imgUpload} onChange={previewImage} />
          </label> */}
          <button className="button button--primary" type="submit" onClick={updateItem}>
            Update
          </button>
          <a href="#" className="link--plain" onClick={() => modal.current.closeModal()}>
            Cancel
          </a>
        </div>
      </div>
    </>
  )
}

export default UploadImages
