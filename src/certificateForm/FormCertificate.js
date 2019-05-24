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
    /*
     function handleFormSubmit(newEntry, history) {
    setNewsList([newEntry, ...newsList]);
    history.push('/');
  }

  <Route
              path="/create"
              render={props => (
                <CreatePage
                  onFormSubmit={handleFormSubmit}
                  history={props.history}
                />
    */
  }

  return (
    <form onSubmit={handleOnSubmit}>
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
      <button type="submit" />
    </form>
  )
}
