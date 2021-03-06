import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { chartWorldColor, backgroundColor } from '../commons/constants'

const StyledButton = styled.button`
  border: 2px solid ${props => props.btncolor || chartWorldColor};
  border-radius: 3px;
  background: ${backgroundColor};
  color: ${props => props.btncolor || chartWorldColor};
  margin: 5px;
  padding: 0.5em 1em;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
`

export default function ButtonSubmit({ text, className }) {
  return (
    <StyledButton type="submit" className={className}>
      {text}
    </StyledButton>
  )
}

ButtonSubmit.propType = {
  text: PropTypes.string.isRequired,
}
