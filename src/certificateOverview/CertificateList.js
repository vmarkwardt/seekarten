import React from 'react'
import styled from 'styled-components'
import CertificateCard from './CertificateCard'

const StyledCertificateList = styled.ul`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`

export default function CertificateList({ certificateList }) {
  return (
    <StyledCertificateList>
      {certificateList.map(cert => (
        <CertificateCard {...cert} />
      ))}
    </StyledCertificateList>
  )
}
