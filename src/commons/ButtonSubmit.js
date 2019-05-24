import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px;
`

export default function ButtonSubmit() {
  return <StyledButton type="submit">Speichern</StyledButton>
}
