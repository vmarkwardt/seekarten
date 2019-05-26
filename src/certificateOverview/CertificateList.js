import React from 'react'
import styled from 'styled-components'
import CertificateCard from './CertificateCard'
import uid from 'uid'

const StyledCertificateList = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default function CertificateList({ certificateList }) {
  return (
    <StyledCertificateList>
      {certificateList.map(cert => (
        <CertificateCard key={uid()} {...cert} />
      ))}
    </StyledCertificateList>
  )
}
