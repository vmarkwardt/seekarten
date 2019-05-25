import React from 'react'
import styled from 'styled-components'

const StyledCertificateCard = styled.li``

export default function CertificateCard({ title, subject, date, comment }) {
  return (
    <StyledCertificateCard>
      <>
        <em>{subject}</em>
        <span>{date}</span>
      </>
      <h3>{title}</h3>
      <p>{comment}</p>
    </StyledCertificateCard>
  )
}
