import React, { useState } from 'react'
import { getISODate } from '../utils'

export default function FormCertificate() {
  const today = getISODate(new Date())
  const [certificate, setCertificate] = useState({})

  function handleTitleOnChange(event) {
    setCertificate({ title: event.target.value })
  }

  function handleDateOnChange(event) {
    setCertificate({ date: event.target.value })
  }
  function handleCommentOnChange(event) {
    setCertificate({ comment: event.target.value })
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    
  }

  return (
    <form>
      <label>
        Titel:
        <input
          type="text"
          onChange={handleTitleOnChange}
          name="title"
          required
        />
      </label>
      <label>
        Fach / Thema:
        <input type="text" name="subject" required />
      </label>
      <label>
        Datum:
        <input
          type="date"
          value={today} //YYYY-MM-DD
          onChange={handleDateOnChange}
          name="date"
        />
      </label>
      <label>
        Bemerkung:
        <textarea
          name="comment"
          rows="5"
          cols="33"
          onChange={handleCommentOnChange}
        />
      </label>
      <button type="submit" onClick={handleOnSubmit} />
    </form>
  )
}
