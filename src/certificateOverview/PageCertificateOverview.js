import React from 'react'
import styled from 'styled-components'

const StyledPageCertificateOverview = styled.main`
  margin: 5px;
  padding: 10px;
`

export default function PageCertificateOverview() {
  return (
    <StyledPageCertificateOverview>
      <header className="App-header">
        <h1>Zertifikate</h1>
      </header>
    </StyledPageCertificateOverview>
  )
}
