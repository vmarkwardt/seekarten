import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLink = styled.button`
  border: 2px solid ${props => (props.btnColor ? props.btnColor : 'turquoise')};
  border-radius: 3px;
  color: ${props => props.btnColor || 'turquoise'};
  display: inline-block;
  margin: 1em;
  padding: 0.25em 1em;
  text-decoration: none;
`

export default function AreaLink({ name, btnColor, path }) {
  return (
    <StyledLink as="a" href={path} btnColor={btnColor}>
      {name}
    </StyledLink>
  )
}

AreaLink.propTypes = {
  name: PropTypes.string.isRequired,
}
