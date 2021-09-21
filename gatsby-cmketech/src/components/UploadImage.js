import React, { useState, useCallback, useEffect, useRef, createRef } from "react"
import axios from "axios"
import { TwitterPicker } from "react-color"

const UploadImages = ({ itemid, upload, modal, newlogo, ...props }) => {
  const imgUpload = useRef()
  const [img, setImg] = useState(upload.src)
  const [errorMessage, setErrorMessage] = useState("")
  const [bgcolor, setBgColor] = useState(upload.bgcolor)
  const [showPal, setShowPal] = useState(false)

  const updateItem = (e, input) => {
    e.preventDefault()
    if (imgUpload.current.files.length > 0) {
      let formData = new FormData()
      let file = imgUpload.current.files[0]

      formData.append("file", file)

      let url = "https://edit.choosemketech.org"
      let fileReader = new FileReader()

      fileReader.onload = function () {
        let imgFile = new Image()
        imgFile.onload = function () {
          let defaultDimension = `${upload.width}, ${upload.height}`
          let fileUploadDimension = `${imgFile.width}, ${imgFile.height}`
          if (defaultDimension === fileUploadDimension) {
            const sendGetRequest = async () => {
              try {
                const resp = await axios.post(url + "/wp-json/wp/v2/media", formData, {
                  headers: {
                    "Content-Disposition": "attachment; filename='" + file.name + "'",
                    "Content-Type": "image/png, image/jpeg, image/svg+xml",
                    authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
                  },
                })

                // const deleteResp = await axios.delete(url + "/wp-json/wp/v2/media/" + resp.data.id + "?force=true", formData, {
                //   headers: {
                //     "Content-Disposition": "attachment; filename='" + file.name + "'",
                //     "Content-Type": "image/png, image/jpeg, image/svg+xml",
                //     authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
                //   },
                // })

                newlogo = resp.data.source_url

                modal.current.closeModal(props.changeImage(newlogo), props.changeBgColor(bgcolor))
              } catch (err) {
                console.error(err)
              }
            }
            sendGetRequest()
          } else {
            setErrorMessage("errorMessage")
          }
        }
        imgFile.src = fileReader.result
      }
      fileReader.readAsDataURL(file)
    }
  }

  const deleteOrigImg = () => {
    let origImg = imgUpload.current.files[0].name
    if (origImg) {
      axios
        .delete("https://edit.choosemketech.org/wp-json/wp/v2/media/" + origImg + "/?force=1", {
          headers: {
            "Content-Disposition": "attachment; filename='" + origImg + "'",
            "Content-Type": "image/png, image/jpeg, image/svg+xml",
            authorization: `Bearer ${process.env.GATSBY_WPTOKEN}`,
          },
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const previewImage = (e) => {
    let oFReader = new FileReader()
    oFReader.readAsDataURL(imgUpload.current.files[0])
    oFReader.onload = function (oFREvent) {
      setImg(oFREvent.target.result)
    }
  }

  const handleChangeComplete = (color) => {
    setBgColor(color.hex)
  }

  const handleClick = () => {
    setShowPal({ showPal: !showPal })
  }

  const handleClose = () => {
    setShowPal(!showPal)
  }

  const popover = {
    position: "absolute",
    zIndex: 1,
    bottom: "50px",
    right: "0",
  }
  const cover = {
    position: "fixed",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    width: "100%",
    height: "80%",
  }

  return (
    <>
      <form onSubmit={updateItem}>
        <div className={`uploaded-image ${upload.class}`}>
          <div className="uploaded-image__close">
            <button type="button" onClick={() => modal.current.closeModal()}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="uploaded-image__update" style={{ backgroundColor: `${bgcolor}` }}>
            {(() => {
              if (img) {
                return <img src={img} alt="image" />
              }
            })()}
            <div className="uploaded-image__settings">
              <label htmlFor="imgUpload" className="button button--primary">
                <i className="fas fa-camera"></i>
                <input id="imgUpload" type="file" accept="image/png, image/jpeg, image/svg+xml" ref={imgUpload} onChange={previewImage} />
              </label>
              <label className="button button--primary" onClick={handleClick}>
                <i className="fas fa-palette"></i>
              </label>
              <label className="button button--secondary">
                <i className="fas fa-question"></i>
              </label>
              {showPal ? (
                <div style={popover}>
                  <div style={cover} onClick={handleClose} />
                  <TwitterPicker color={bgcolor} onChangeComplete={handleChangeComplete} />
                </div>
              ) : null}
              <div className={`image--info-default ${errorMessage} `}>
                <p>
                  This default Image width and height are <strong>{upload.width}</strong> x <strong>{upload.height}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="uploaded-image__actions">
            {/* <label htmlFor="imgUpload" className="button button--primary">
            <span>Upload Image</span>
            <input id="imgUpload" type="file" ref={imgUpload} onChange={previewImage} />
          </label> */}
            <button className="button button--primary" type="submit">
              Update
            </button>
            <a href="#" className="link--plain" onClick={() => modal.current.closeModal()}>
              Cancel
            </a>
          </div>
        </div>
      </form>
    </>
  )
}

export default UploadImages
