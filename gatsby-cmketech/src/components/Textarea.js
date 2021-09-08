import React, { useState, useCallback, useEffect } from "react"

const Textarea = ({ rows, cols, value, limit, maxlength, memberstack, id, name }) => {
  useEffect(() => {
    if (name && name != null) {
      if (document.getElementById(name) != null) {
        value = document.getElementById(name).value
      }
    }

    let [content, textCount] = useState()

    const setTextareaCharacter = useCallback(
      (text) => {
        textCount(text.slice(0, limit))
      },
      [limit, textCount]
    )

    let remainingContent
    if (value) {
      remainingContent = Math.abs(value.length - limit)
    }
  })

  return (
    <div className="textarea--container">
      <textarea id={id} name={name} rows={rows} cols={cols} onChange={(event) => setTextareaCharacter(event.target.value)} defaultValue={value} maxLength={maxlength} data-ms-member={memberstack} />
      <p>{remainingContent} characters remain</p>
    </div>
  )
}

export default Textarea
