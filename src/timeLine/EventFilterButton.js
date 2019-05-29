import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledEventFilterButton = styled.button``

export function EventFilterButton({ type, onClick }) {
  return (
    <StyledEventFilterButton onClick={() => onClick({ type })}>
      {type}
    </StyledEventFilterButton>
  )
}

EventFilterButton.propTypes = {
  type: PropTypes.string.isRequired,
}
