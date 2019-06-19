import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { backgroundColor } from './constants'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
  border: none;
  border: 1px solid ${backgroundColor};
`

export default function InputText({
  name,
  value,
  onChange,
  required,
  placeholder,
  autoFocus,
}) {
  return (
    <StyledInput
      type="text"
      name={name}
      value={value}
      onChange={event => onChange(event)}
      required={required}
      placeholder={placeholder}
      autoFocus={autoFocus}
    />
  )
}

InputText.propType = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
}
