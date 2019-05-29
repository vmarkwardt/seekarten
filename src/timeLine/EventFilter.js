import React from 'react'
import styled from 'styled-components'
import { EventFilterButton } from './EventFilterButton'

const StyledEventFilter = styled.section`
  background: #b6e1dd;
  margin: 5px;
  padding: 5px;
`

export function EventFilter({ typeList, filter, onFilterClick }) {
  return (
    <StyledEventFilter>
      {typeList.map(type => (
        <EventFilterButton
          key={type}
          type={type}
          isActive={type === filter}
          onClick={onFilterClick}
        />
      ))}
    </StyledEventFilter>
  )
}
