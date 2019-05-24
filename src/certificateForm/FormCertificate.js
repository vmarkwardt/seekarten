import React, { useState } from 'react'
import { getISODate } from '../utils'
import styled from 'styled-components'
import ButtonSubmit from '../commons/ButtonSubmit'
import InputText from '../commons/InputText'
import InputDate from '../commons/InputDate'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
`

export default function FormCertificate({ onFormSubmit, history }) {
  const today = getISODate(new Date()) // needs format: YYYY-MM-DD
  const [certificate, setCertificate] = useState({})

  function handleInputOnChange(key, value) {
    console.log(key, value)
    const param = {}
    param[key] = value
    setCertificate({ ...certificate, ...param })
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    onFormSubmit(certificate, history)
  }

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <label htmlFor="title">Titel:</label>
      <InputText
        name="title"
        onChange={event => handleInputOnChange('title', event.target.value)}
        required={true}
      />
      <label htmlFor={'subject'}>Fach / Thema:</label>
      <InputText
        name="subject"
        onChange={event => handleInputOnChange('subject', event.target.value)}
        required={true}
      />
      <label htmlFor="date">Datum:</label>
      <InputDate
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
      <ButtonSubmit text={'Speichern'} />
    </StyledForm>
  )
}
