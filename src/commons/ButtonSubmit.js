import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.button`
  padding: 5px;
`

export default function ButtonSubmit({ text }) {
  return <StyledButton type="submit">{text}</StyledButton>
}

ButtonSubmit.propType = {
  text: PropTypes.string.isRequired,
}
