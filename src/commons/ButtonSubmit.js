import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  background: whitesmoke;
  border: 2px solid ${props => props.btncolor || '#2a9d8f'};
  border-radius: 3px;
  color: ${props => props.btncolor || '#2a9d8f'};
  margin: 5px;
  padding: 0.5em 1em;
  text-decoration: none;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
`

export default function ButtonSubmit({ text }) {
  return <StyledButton type="submit">{text}</StyledButton>
}

ButtonSubmit.propType = {
  text: PropTypes.string.isRequired,
}
