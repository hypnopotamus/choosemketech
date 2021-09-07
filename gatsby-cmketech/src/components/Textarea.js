import React, { useState, useCallback } from "react"

const Textarea = ({ rows, cols, value, limit, maxlength, memberstack }) => {
  const [content, setContent] = useState(value.slice(0, limit))

  const setTextareaCharacter = useCallback(
    (text) => {
      setContent(text.slice(0, limit))
    },
    [limit, setContent]
  )

  let remainingContent = Math.abs(content.length - limit)

  return (
    <div className="textarea--container">
      <textarea rows={rows} cols={cols} onChange={(event) => setTextareaCharacter(event.target.value)} defaultValue={content} maxLength={maxlength} data-ms-member={memberstack} />
      <p>{remainingContent} characters remain</p>
    </div>
  )
}

export default Textarea
