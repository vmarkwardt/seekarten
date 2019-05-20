import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.button`
  display: inline-block;
  color: turquoise;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid turquoise;
  border-radius: 3px;
  display: block;
  text-decoration: none;
`;

export default function AreaLink({ name }) {
  return (
    <StyledLink as="a" href="/" name>
      {name}
    </StyledLink>
  );
}

AreaLink.propTypes = {
  name: PropTypes.string,
};
