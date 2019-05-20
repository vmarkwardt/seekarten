import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalSyle = createGlobalStyle`
  
  *{

    box-sizing: border-box;
    margin: 0;
    padding: 0;
  } 

  body {
    margin: 0;
    padding: 5px;
    width:100vw;
    font-family: roboto, sans-serif;
    color: darkslategray;
    background: white;
  }
`;

export default function GlobalSyle() {
  return <StyledGlobalSyle />;
}
