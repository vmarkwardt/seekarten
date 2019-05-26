import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavIcons from './NavIcons'

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
  return (
    <StyledHeader>
      <Navigation>
        <NavIcons toggleChartMenu={() => {}} />
      </Navigation>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  linkList: PropTypes.array.isRequired,
}
