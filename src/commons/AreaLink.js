import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { chartWorldColor } from '../commons/constants'

const StyledLink = styled.button`
  border: 2px solid
    ${props => (props.btncolor ? props.btncolor : chartWorldColor)};
  border-radius: 3px;
  color: ${props => props.btncolor || chartWorldColor};
  display: inline-block;
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
`

export default function AreaLink({ name, btnColor, path }) {
  return (
    <StyledLink as="a" href={path} btncolor={btnColor}>
      {name}
    </StyledLink>
  )
}

AreaLink.propTypes = {
  name: PropTypes.string.isRequired,
  btnColor: PropTypes.string,
  path: PropTypes.string.isRequired,
}
