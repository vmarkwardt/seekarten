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

export default function CertificateList(props) {
  return (
    <StyledCertificateList>
      {props.certificateList.map(cert => (
        <CertificateCard key={uid()} {...cert} {...props} />
      ))}
    </StyledCertificateList>
  )
}
