import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledEventFilterButton = styled.button`
  background: ${props => (props.isactive ? 'whitesmoke' : '#b6e1dd ')};
  color: #2a9d8f;
  border: 2px solid #2a9d8f;
  border-radius: 3px;
  text-decoration: none;
  margin: 5px;
  padding: 5px;
  font-size: 1em;

  &.active {
    background: whitesmoke;
  }
`

export function EventFilterButton({ type, onClick, isActive = false }) {
  return (
    <StyledEventFilterButton
      onClick={() => onClick({ type })}
      isactive={isActive}
    >
      {type}
    </StyledEventFilterButton>
  )
}

EventFilterButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}
