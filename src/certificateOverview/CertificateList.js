import React from 'react'
import styled from 'styled-components'
import CertificateCard from './CertificateCard'

const StyledCertificateList = styled.section`
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`

export default function CertificateList({ certificateList }) {
  return (
    <StyledCertificateList>
      {certificateList.map(cert => (
        <CertificateCard key={cert.title} {...cert} />
      ))}
    </StyledCertificateList>
  )
}
