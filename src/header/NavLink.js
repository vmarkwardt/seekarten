import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledNavLink = styled(RRDNavlink)`
  background: #b6e1dd;
  color: ${props => props.btncolor || '#2a9d8f'};
  border: 2px solid ${props => props.btncolor || '#2a9d8f'};
  border-radius: 3px;
  text-decoration: none;
  margin: 5px;
  padding: 0.25em 1em;

  &:hover {
    background: white;
  }

  &.active {
    background: white;
  }
`
export default function NavLink({ name, btnColor, to }) {
  return (
    <StyledNavLink to={to} btncolor={btnColor || '#2a9d8f'}>
      {name || 'Home'}
    </StyledNavLink>
  )
}

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string,
  to: PropTypes.string.isRequired,
}
