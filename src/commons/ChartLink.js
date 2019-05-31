import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'
import PropTypes from 'prop-types'

const StyledLink = styled(RRDNavlink)`
  border: 2px solid ${props => (props.btncolor ? props.btncolor : '#2a9d8f')};
  border-radius: 3px;
  color: ${props => props.btncolor || '#2a9d8f'};
  display: inline-block;
  margin: 3px;
  padding: 0.25em 1em;
  text-decoration: none;

  &:hover {
    background: whitesmoke;
  }

  &.active {
    background: whitesmoke;
  }
`

export default function ChartLink({ name, btnColor, path }) {
  return (
    <StyledLink to={path} btncolor={btnColor}>
      {name}
    </StyledLink>
  )
}

ChartLink.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string,
  path: PropTypes.string.isRequired,
}