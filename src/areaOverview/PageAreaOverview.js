import React from 'react'
import AreaLink from '../commons/AreaLink'
import styled from 'styled-components'
import { H2 } from '../commons/headings'
import {
  backgroundColor,
  chartIColor,
  chartWeColor,
  chartWorldColor,
} from '../commons/constants'

const StyledPageAreaOverview = styled.main`
  background: ${backgroundColor};
  padding: 10px;
`

export default function PageAreaOverview() {
  return (
    <StyledPageAreaOverview>
      <header className="App-header">
        <H2>Seekarten</H2>
      </header>
      <AreaLink name="Ich" btnColor={chartIColor} path="/ich" />
      <AreaLink name="Wir" btnColor={chartWeColor} path="/wir" />
      <AreaLink name="Welt" btnColor={chartWorldColor} path="/welt" />
    </StyledPageAreaOverview>
  )
}
