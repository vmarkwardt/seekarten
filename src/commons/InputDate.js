import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getISODate } from '../utils'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
  justify-self: start;
`

export default function InputDate({
  name,
  onChange,
  isRequired = false,
  defaultValue = getISODate(new Date()),
}) {
  return (
    <StyledInput
      type="date"
      name={name}
      value={defaultValue}
      onChange={event => onChange(event)}
      required={isRequired ? 'required' : ''}
    />
  )
}

InputDate.propType = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.string,
}
