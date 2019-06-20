import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { backgroundColor } from './constants'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
  justify-self: start;
  border: none;
  border: 1px solid ${backgroundColor};
`

export default function InputDate({ name, onChange, required, value }) {
  return (
    <StyledInput
      type="date"
      name={name}
      value={value}
      onChange={event => onChange(event)}
      required={required}
    />
  )
}

InputDate.propType = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.string,
}
