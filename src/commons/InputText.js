import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledInput = styled.input`
  padding: 5px;
  font-size: 1em;
`
/*
&:placeholder-shown {
    border: 1px solid #ff9999;
  }
*/

export default function InputText({
  name,
  value,
  onChange,
  required,
  placeholder,
}) {
  return (
    <StyledInput
      type="text"
      name={name}
      value={value}
      onChange={event => onChange(event)}
      required={required}
      placeholder={placeholder}
    />
  )
}

InputText.propType = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
}
