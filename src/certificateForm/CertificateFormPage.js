import React from 'react'
import { PageHeadline } from '../commons/headings'
import FormCertificate from './FormCertificate'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMain = styled.main``

export default function CertificateFormPage({
  onFormSubmit,
  editCertificate,
  history,
}) {
  return (
    <StyledMain>
      <PageHeadline title={'Zertifikat eintragen'} />
      <FormCertificate
        onSubmit={onFormSubmit}
        editCertificate={editCertificate}
        history={history}
      />
    </StyledMain>
  )
}

CertificateFormPage.propType = {
  onFormSubmit: PropTypes.func.isRequired,
  editCertificate: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
