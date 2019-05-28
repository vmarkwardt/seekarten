import React from 'react'
import styled from 'styled-components'
import CertificateList from './CertificateList'
import { H2 } from '../commons/headings'

const StyledPageCertificateOverview = styled.main``

export default function PageCertificateOverview({
  certificateList,
  onDeleteCertificate,
}) {
  return (
    <StyledPageCertificateOverview>
      <header className="App-header">
        <H2 title="Zertifikate" />
      </header>
      <CertificateList
        certificateList={certificateList}
        onDeleteCertificate={onDeleteCertificate}
      />
    </StyledPageCertificateOverview>
  )
}
