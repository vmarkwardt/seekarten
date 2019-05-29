import React, { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../commons/headings'
import EventList from './EventList'
import { EventFilter } from './EventFilter'

const StyledPageTimeLine = styled.main`
  margin: 5px;
`

export default function PageTimeLine({ eventList }) {
  const firstList = eventList.slice()
  firstList.sort((a, b) => (a.date < b.date ? 1 : -1))

  const [filteredEventList, setFilteredEventList] = useState(firstList)

  function handleFilterOnClick({ type }) {
    console.log(firstList)
    setFilteredEventList(firstList)
  }

  return (
    <StyledPageTimeLine>
      <header>
        <H2 title="Zeitleiste" />
        <EventFilter
          eventList={filteredEventList}
          onFilterClick={handleFilterOnClick}
        />
      </header>
      <EventList eventList={filteredEventList} />
    </StyledPageTimeLine>
  )
}
