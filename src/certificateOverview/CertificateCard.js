import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledCertificateCard = styled.section`
  border: 1px solid darkgray;
`

export default function CertificateCard({ title, subject, date, comment }) {
  return (
    <StyledCertificateCard>
      <>
        <em>{subject}</em>
        <span>{date}</span>
      </>
      <h4>{title}</h4>
      <p>{comment}</p>
    </StyledCertificateCard>
  )
}

CertificateCard.propTypes = {
  title: PropTypes.string.isRequired,
  subject: PropTypes.string,
  date: PropTypes.string.isRequired,
  comment: PropTypes.string,
}
