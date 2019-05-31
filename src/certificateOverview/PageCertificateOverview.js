import React from 'react'
import styled from 'styled-components'
import CertificateList from './CertificateList'
import { H2 } from '../commons/headings'
import PropTypes from 'prop-types'

const StyledPageCertificateOverview = styled.main``

export default function PageCertificateOverview({
  certificateList,
  onDeleteCertificate,
  onEditCertificate,
  history,
}) {
  return (
    <StyledPageCertificateOverview>
      <header className="App-header">
        <H2 title="Zertifikate" />
      </header>
      <CertificateList
        certificateList={certificateList}
        onDeleteCertificate={onDeleteCertificate}
        onEditCertificate={onEditCertificate}
        history={history}
      />
    </StyledPageCertificateOverview>
  )
}

PageCertificateOverview.propType = {
  certificateList: PropTypes.array.isRequired,
  onDeleteCertificate: PropTypes.func.isRequired,
  onEditCertificate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
