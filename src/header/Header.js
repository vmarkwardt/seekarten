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

// <NavLink exact to="/" name={'Home'} btnColor={''} />
function Header({ linkList }) {
  const [isChartsMenuOpen, setIsChartsMenuOpen] = useState(false)

  function handleChartMenu() {
    setIsChartsMenuOpen(!isChartsMenuOpen)
  }
  return (
    <StyledHeader>
      <Navigation>
        <NavIcons toggleChartMenu={handleChartMenu} />
      </Navigation>
      <SubNavChartMenu isOpen={isChartsMenuOpen} />
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  linkList: PropTypes.array.isRequired,
}
