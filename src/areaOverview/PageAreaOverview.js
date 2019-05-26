import React from 'react'
import AreaLink from '../commons/AreaLink'
import styled from 'styled-components'
import { H2 } from '../commons/headings'

const StyledPageAreaOverview = styled.main`
  background: #b6e1dd;
  padding: 10px;
`

export default function PageAreaOverview() {
  return (
    <StyledPageAreaOverview>
      <header className="App-header">
        <H2>Seekarten</H2>
      </header>
      <AreaLink name="Ich" btnColor="#e76f51" path="/ich" />
      <AreaLink name="Wir" btnColor="#f4a261" path="/wir" />
      <AreaLink name="Welt" btnColor="#2a9d8f" path="/welt" />
    </StyledPageAreaOverview>
  )
}
