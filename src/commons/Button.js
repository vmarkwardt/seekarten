import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { chartWorldColor } from '../commons/constants'

const StyledButton = styled.button`
  background: whitesmoke;
  border: 2px solid;
  border-radius: 3px;
  color: ${chartWorldColor};
  margin-left: 0.5em;
  padding: 0.5em 1em;
  text-decoration: none;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
`

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>
}

Button.propType = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
