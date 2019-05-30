import React from 'react'
import styled from 'styled-components'
import CertificateList from './CertificateList'
import { H2 } from '../commons/headings'

const StyledPageCertificateOverview = styled.main``

export default function PageCertificateOverview(props) {
  return (
    <StyledPageCertificateOverview>
      <header className="App-header">
        <H2 title="Zertifikate" />
      </header>
      <CertificateList {...props} />
    </StyledPageCertificateOverview>
  )
}
