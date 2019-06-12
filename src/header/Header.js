import React, { useState } from 'react'
import styled from 'styled-components'
import NavIcons from './NavIcons'
import SubNavChartMenu from './SubNavChartMenu'
import { backgroundColor } from '../commons/constants'

const StyledHeader = styled.header`
  background: ${backgroundColor};
  padding: 5px;

  height: 102px;
  transition: height 200ms;

  &.subNavClosed {
    height: 62px;
    transition: height 200ms;
  }
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

function Header() {
  const [isChartsMenuOpen, setIsChartsMenuOpen] = useState(false)

  function handleChartMenu(event) {
    event.stopPropagation()
    setIsChartsMenuOpen(!isChartsMenuOpen)
  }
  return (
    <StyledHeader className={isChartsMenuOpen ? '' : 'subNavClosed'}>
      <Navigation onClick={handleChartMenu}>
        <NavIcons toggleChartMenu={handleChartMenu} />
      </Navigation>
      <SubNavChartMenu isOpen={isChartsMenuOpen} />
    </StyledHeader>
  )
}

export default Header
