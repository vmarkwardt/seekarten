import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'

const StyledNavLink = styled(RRDNavlink)`
  background: #b6e1dd;
  color: ${props => props.btnColor || '#2a9d8f'};
  border: 2px solid ${props => props.btnColor || '#2a9d8f'};
  border-radius: 3px;
  text-decoration: none;
  margin: 1em;
  padding: 0.25em 1em;

  &:hover {
    background: #e76f51;
  }

  &.active {
    background: lightgrey;
  }
`
export default function NavLink({ name, btnColor, to }) {
  return (
    <StyledNavLink to={to} btnColor={btnColor || '#2a9d8f'}>
      {name || 'Home'}
    </StyledNavLink>
  )
}
//<StyledNavLink to={to} btnColor={btnColor || '#2a9d8f'}>
