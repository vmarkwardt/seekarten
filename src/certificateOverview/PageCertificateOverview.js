import React from 'react'
import styled from 'styled-components'
import CertificateList from './CertificateList'
import { PageHeadline } from '../commons/headings'
import PropTypes from 'prop-types'

const StyledPageCertificateOverview = styled.main``

const Sum = styled.p`
  align-self: center;
  padding-right: 10px;
`

const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export default function PageCertificateOverview({
  certificateList,
  onDeleteCertificate,
  onEditCertificate,
  history,
}) {
  return (
    <StyledPageCertificateOverview>
      <PageHeader className="App-header">
        <PageHeadline title="Zertifikate" />
        <Sum>{certificateList.length}</Sum>
      </PageHeader>
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
