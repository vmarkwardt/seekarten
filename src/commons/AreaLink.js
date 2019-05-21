import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.button`
  color: ${(props) => props.btnColor || 'turquoise'};
  display: inline-block;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid
    ${(props) => (props.btnColor ? props.btnColor : 'turquoise')};
  border-radius: 3px;
  display: block;
  text-decoration: none;
`;

export default function AreaLink({ name, btnColor }) {
  console.log(name, btnColor);
  return (
    <StyledLink as="a" href="/" btnColor={btnColor}>
      {name}
    </StyledLink>
  );
}

AreaLink.propTypes = {
  name: PropTypes.string,
};
