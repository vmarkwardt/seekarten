import React, { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../commons/headings'

const StyledPageTimeLine = styled.main``

export default function PageTimeLine({ eventList }) {
  console.log('PageTimeLine.js EventList: ', eventList)

  /*const firstList = eventList.map(event => ({
    date: event.date,
    title: event.title,
    id
  }))
  */
  const firstList = eventList.slice()
  firstList.sort((a, b) => (a.date < b.date ? 1 : -1))

  const [filteredEventList, setFilteredEventList] = useState(firstList)
  return (
    <StyledPageTimeLine>
      <header>
        <H2 title="Zeitleiste" />
      </header>
      <ul>
        {filteredEventList.map(event => (
          <li key={event.title}>
            {event.date} {event.title}
          </li>
        ))}
      </ul>
    </StyledPageTimeLine>
  )
}
