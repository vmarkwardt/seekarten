import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  background: whitesmoke;
  border: 2px solid #2a9d8f;
  border-radius: 3px;
  color: #2a9d8f;
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
}
