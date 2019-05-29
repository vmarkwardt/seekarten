import React from 'react'
import styled from 'styled-components'
import { EventFilterButton } from './EventFilterButton';



const StyledEventFilter = styled.section``

export function EventFilter({eventList, onFilterClick}){

  return (
    <StyledEventFilter>
      {eventList
        .map(event => event.type)
        .map(type => (
          <EventFilterButton name={type} onClick={onFilterClick} />
        ))}
    </StyledEventFilter>
  )
}