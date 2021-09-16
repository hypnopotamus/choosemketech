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

      // let headers = {}

      // headers["Content-Disposition"] = "attachment; filename='" + file.name + "'"
      // headers["Content-Type"] = "image/png"
      // headers["Access-Control-Allow-Origin"] = "*"
      // headers["Authorization"] = `Bearer ${process.env.WPTOKEN}`

      let url = "https://edit.choosemketech.org"
      const sendGetRequest = async () => {
        try {
          const resp = await axios.post(url + "/wp-json/wp/v2/media", formData, {
            headers: {
              "Content-Disposition": "attachment; filename='" + file.name + "'",
              "Content-Type": "image/png",
              authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
            },
          })
          console.log(resp.data)
        } catch (err) {
          // Handle Error Here
          console.error(err)
        }
      }

      sendGetRequest()
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
