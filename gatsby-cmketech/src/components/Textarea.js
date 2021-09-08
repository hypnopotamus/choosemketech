import React, { useState, useCallback, useEffect } from "react"

const Textarea = ({ rows, cols, value, limit, maxlength, memberstack, id, name }) => {
  const [count, setCharacterCount] = useState(700)
  const [textCount, setTextCount] = useState([])

  useEffect(() => {
    if (name && name != null) {
      if (document.getElementById(name) != null) {
        value = document.getElementById(name).value
      }
      setTextCount(Math.abs(value.length - limit))
    }
  }, [count])

  return (
    <div className="textarea--container">
      <textarea id={id} name={name} rows={rows} cols={cols} onChange={(event) => setCharacterCount(event.target.value)} defaultValue={value} maxLength={maxlength} data-ms-member={memberstack} />
      <p>{textCount} characters remain</p>
    </div>
  )
}

export default Textarea
