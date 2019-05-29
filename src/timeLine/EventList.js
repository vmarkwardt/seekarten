import React from 'react'
import styled from 'styled-components'
import EventListItem from './EventListItem'

const StyledEventList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 5px;
`

export default function EventList({ eventList }) {
  return (
    <StyledEventList>
      {eventList.map(event => (
        <EventListItem
          key={event.title}
          date={event.date}
          title={event.title}
        />
      ))}
    </StyledEventList>
  )
}
