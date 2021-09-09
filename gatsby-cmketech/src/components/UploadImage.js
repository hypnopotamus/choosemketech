import React, { useState, useCallback, useEffect, useRef } from "react"
import axios from "axios"
import { SketchPicker } from "react-color"

const UploadImages = ({ itemid, upload, modal }) => {
  const imgUpload = useRef()
  const [img, setImg] = useState(upload.src)

  const updateItem = (e) => {
    if (imgUpload.current.files.length > 0) {
      var formData = new FormData()
      let file = imgUpload.current.files[0]

      formData.append("file", file)
      formData.append("title", file.name)
      formData.append("post", itemid) //coming from props

      let headers = {}
      headers["Content-Disposition"] = "form-data; filename='" + file.name + "'"
      headers["X-WP-Nonce"] = nonce

      let url = "https://edit.choosemketech.org"
      axios
        .post(url + "/wp-json/wp/v2/media/?featured=" + itemid, formData, headers)
        .then(function (resp) {
          deleteOrigImg()
          getItems() //callback to parent's this.getItems(),
        })
        .catch((e) => {
          console.log(e)
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
  //   fetch(`https://edit.choosemketech.org/wp-json/wp/v2/${logo}`)
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
              <i class="fas fa-camera"></i>
              <input id="imgUpload" type="file" ref={imgUpload} onChange={previewImage} />
            </label>
            <button className="button button--primary">
              <i class="fas fa-palette"></i>
            </button>
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
