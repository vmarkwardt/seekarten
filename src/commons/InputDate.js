import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
  justify-self: start;
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
