import React, { useState } from 'react'
import styled from 'styled-components'
import NavIcons from './NavIcons'
import SubNavChartMenu from './SubNavChartMenu'
import { backgroundColor } from '../commons/constants'

const StyledHeader = styled.header`
  background: ${backgroundColor};
  padding: 5px;

  height: 102px;
  transition: height 200ms ease-in-out;

  &.subNavClosed {
    height: 62px;
    transition: height 200ms ease-in-out;
  }
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

function Header() {
  const [isChartsMenuOpen, setIsChartsMenuOpen] = useState(false)

  function handleChartMenu(event, isChartBtn) {
    event.stopPropagation()
    setIsChartsMenuOpen(isChartBtn ? !isChartsMenuOpen : false)
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
