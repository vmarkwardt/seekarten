import React from 'react'
import styled from 'styled-components'

const StyledCertificateCard = styled.ul``

export default function CertificateCard({ title, subject, date, comment }) {
  return (
    <StyledCertificateCard
      title={title}
      subject={subject}
      date={date}
      comment={comment}
    />
  )
}
