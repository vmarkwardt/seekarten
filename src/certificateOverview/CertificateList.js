import React from 'react'
import styled from 'styled-components'
import CertificateCard from './CertificateCard'
import PropTypes from 'prop-types'

const StyledCertificateList = styled.section`
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export default function CertificateList({
  certificateList,
  onDeleteCertificate,
  onEditCertificate,
  history,
}) {
  return (
    <StyledCertificateList>
      {certificateList.map(cert => (
        <CertificateCard
          key={cert._id}
          {...cert}
          onDeleteCertificate={onDeleteCertificate}
          onEditCertificate={onEditCertificate}
          history={history}
        />
      ))}
    </StyledCertificateList>
  )
}

CertificateList.propType = {
  certificateList: PropTypes.array.isRequired,
  onDeleteCertificate: PropTypes.func.isRequired,
  onEditCertificate: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}
