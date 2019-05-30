import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavIcons from './NavIcons'
import SubNavChartMenu from './SubNavChartMenu'

const StyledHeader = styled.header`
  background: #b6e1dd;
  padding: 5px;
`

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
`

function Header() {
  const [isChartsMenuOpen, setIsChartsMenuOpen] = useState(false)

  function handleChartMenu(event, isChartsMenuOpen = false) {
    event.stopPropagation()
    setIsChartsMenuOpen(isChartsMenuOpen)
  }
  return (
    <StyledHeader>
      <Navigation onClick={handleChartMenu}>
        <NavIcons toggleChartMenu={handleChartMenu} />
      </Navigation>
      <SubNavChartMenu isOpen={isChartsMenuOpen} />
    </StyledHeader>
  )
}

export default Header
