import React, { useState } from 'react'
import uid from 'uid'
import styled from 'styled-components'
import ButtonSubmit from '../commons/ButtonSubmit'
import InputText from '../commons/InputText'
import InputDate from '../commons/InputDate'
import { getFormatedDate, getTrimmedEntry } from '../utils'
import PropTypes from 'prop-types'

const StyledForm = styled.form`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr;
`

export default function FormCertificate({
  onSubmit,
  editCertificate,
  history,
}) {
  const [certificate, setCertificate] = useState(
    editCertificate || getNewCertificate()
  )

  function getNewCertificate() {
    return {
      date: getFormatedDate(new Date()),
      id: uid(),
      title: '',
      subject: '',
      comment: '',
    }
  }

  function handleInputOnChange(key, value) {
    const param = {}
    param[key] = value
    setCertificate({ ...certificate, ...param })
  }

  function handleOnSubmit(event) {
    const newEntry = certificate
    event.preventDefault()
    if (isCertificateValid(newEntry)) {
      setCertificate(getNewCertificate())
      onSubmit(getTrimmedCertificate(newEntry), history)
    } else {
      window.alert('Bitte einen Titel eingeben.')
    }
  }

  function isCertificateValid(certificate) {
    return !!certificate.title
  }

  function getTrimmedCertificate() {
    const certCopy = { ...certificate }
    Object.keys(certCopy).forEach(
      key => (certCopy[key] = getTrimmedEntry(certCopy[key]))
    )
    return certCopy
  }

  return (
    <StyledForm onSubmit={handleOnSubmit}>
      <label htmlFor="title">Titel:</label>
      <InputText
        value={certificate.title}
        name="title"
        onChange={event => handleInputOnChange('title', event.target.value)}
        required={true}
      />
      <label htmlFor={'subject'}>Fach / Thema:</label>
      <InputText
        value={certificate.subject}
        name="subject"
        onChange={event => handleInputOnChange('subject', event.target.value)}
        required={true}
      />
      <label htmlFor="date">Datum:</label>
      <InputDate
        value={certificate.date}
        name="date"
        onChange={event => handleInputOnChange('date', event.target.value)}
      />
      <label htmlFor="comment">Bemerkung:</label>
      <textarea
        value={certificate.comment}
        name="comment"
        rows="5"
        cols="33"
        onChange={event => handleInputOnChange('comment', event.target.value)}
      />
      <ButtonSubmit text={'Speichern'} />
    </StyledForm>
  )
}

FormCertificate.propType = {
  onSubmit: PropTypes.func.isRequired,
  editCertificate: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
