import React from 'react'
import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  
  *{

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  body {
    background: white;
    color: darkslategray;
    font-family: roboto, sans-serif;
    margin: 0;
    padding: 5px;
    width:100vw;
  }
`

export default function GlobalStyle() {
  return <StyledGlobalStyle />
}
