import React from 'react'
import styled from 'styled-components'
import CertificateList from './CertificateList'

const StyledPageCertificateOverview = styled.main`
  margin: 5px;
  padding: 10px;
`

export default function PageCertificateOverview({ certificateList }) {
  return (
    <StyledPageCertificateOverview>
      <header className="App-header">
        <h1>Zertifikate</h1>
      </header>
      <CertificateList certificateList={certificateList} />
    </StyledPageCertificateOverview>
  )
}
