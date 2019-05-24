import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  padding: 5px;
`
export function H2({ title }) {
  return <StyledH2>{title}</StyledH2>
}

const StyledH3 = styled.h3`
  padding: 3px;
`
export function H3({ title }) {
  return <StyledH3>{title}</StyledH3>
}
