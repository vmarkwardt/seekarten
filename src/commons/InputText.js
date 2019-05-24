import React from 'react'
import styled from 'styled-components'
import PropTypes from 'propTypes'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
`

export default function InputText({ name, onChange, isRequired = false }) {
  return (
    <StyledInput
      type="text"
      name={name}
      onChange={event => onChange(event)}
      required={isRequired ? 'required' : ''}
    />
  )
}

InputText.propType = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
}
