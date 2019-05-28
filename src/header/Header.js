import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'
import PropTypes from 'prop-types'

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
        {linkList.map(link => (
          <NavLink
            to={'/' + link.name.toLowerCase()}
            name={link.name}
            btnColor={link.color}
            key={link.name}
          />
        ))}
        <NavLink
          to={'/certificate'}
          name={'Zertifikat'}
          btnColor={'darkgrey'}
          key={'certificate'}
        />
      </Navigation>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  linkList: PropTypes.array.isRequired,
}
