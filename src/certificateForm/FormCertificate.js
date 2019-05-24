import React, { useState } from 'react'
import { getISODate } from '../utils'
import styled from 'styled-components'
import ButtonSubmit from '../commons/ButtonSubmit'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
`

export default function FormCertificate({ onFormSubmit, history }) {
  const today = getISODate(new Date()) // needs format: YYYY-MM-DD
  const [certificate, setCertificate] = useState({})

  function handleInputOnChange(key, value) {
    const param = {}
    param[key] = value
    setCertificate({ ...certificate, ...param })
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    onFormSubmit(certificate, history)
    //console.log('Certificate', certificate)
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
    <StyledForm onSubmit={handleOnSubmit}>
      <label htmlFor="title">Titel:</label>
      <input
        type="text"
        name="title"
        onChange={event => handleInputOnChange('title', event.target.value)}
        required
      />
      <label htmlFor={'subject'}>Fach / Thema:</label>
      <input
        type="text"
        name="subject"
        onChange={event => handleInputOnChange('subject', event.target.value)}
        required
      />
      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        value={today}
        name="date"
        onChange={event => handleInputOnChange('date', event.target.value)}
      />
      <label htmlFor="comment">Bemerkung:</label>
      <textarea
        name="comment"
        rows="5"
        cols="33"
        onChange={event => handleInputOnChange('comment', event.target.value)}
      />
      <ButtonSubmit type="submit">Speichern</ButtonSubmit>
    </StyledForm>
  )
}
