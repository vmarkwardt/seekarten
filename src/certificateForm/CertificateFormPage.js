import React from 'react'
import { H2 } from '../commons/headings'
import FormCertificate from './FormCertificate'
import styled from 'styled-components'

const StyledMain = styled.main``

export default function CertificateFormPage(props) {
  return (
    <StyledMain>
      <H2 title={'Zertifikat eintragen'} />
      <FormCertificate onSubmit={props.onFormSubmit} {...props} />
    </StyledMain>
  )
}
