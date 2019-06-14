import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { backgroundColor, chartWorldColor } from '../commons/constants'

const StyledEventFilterButton = styled.button`
  background: ${props => (props.isactive ? 'whitesmoke' : backgroundColor)};
  color: ${chartWorldColor};
  border: 2px solid ${chartWorldColor};
  border-radius: 3px;
  text-decoration: none;
  margin: 5px;
  padding: 5px;
  font-size: 1em;

  &.active {
    background: whitesmoke;
  }
`

export function EventFilterButton({ title, type, onClick, isActive = false }) {
  return (
    <StyledEventFilterButton
      onClick={() => onClick({ type })}
      isactive={isActive}
    >
      {title}
    </StyledEventFilterButton>
  )
}

EventFilterButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}
