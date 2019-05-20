import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalSyle = createGlobalStyle`
  margin:1em;
`;

export default function GlobalSyle() {
  return <StyledGlobalSyle />;
}
