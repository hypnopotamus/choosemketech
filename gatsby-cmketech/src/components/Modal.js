import React, { useState, forwardRef, useImperativeHandle } from "react"
import Portal from "../portal"

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false)
    
    useImperativeHandle(ref, () => {
        return {
            openModal: () => handleOpen(),
            closeModal: () => handleClose(),
        }
    })

    const handleOpen = () => {
        setDisplay(true);
        let root = document.getElementById('___gatsby');
        root.classList.add("modal-opened")
    }

    const handleClose = () => {
        setDisplay(false);
        let root = document.getElementById('___gatsby');
        root.classList.remove("modal-opened")
    }

    if (display) {
        return (
            <Portal>                
                    <div className="modal-backdrop" onClick={handleClose}></div>
                    <div className="modal-container" >
                        {props.children}
                    </div>
                
            </Portal>
        )
    }

    return null
})

export default Modal
