import React, { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../commons/headings'
import EventList from './EventList'
import { EventFilter } from './EventFilter'

const StyledPageTimeLine = styled.main`
  margin: 5px;
`

export default function PageTimeLine({ eventList }) {
  const [filter, setFilter] = useState('all')

  const firstList = eventList.slice()
  firstList.sort((a, b) => (a.date < b.date ? 1 : -1))

  let typeList = firstList.map(event => event.type)
  typeList = [...new Set(typeList)] //unique values
  typeList.unshift('all')

  let filteredEventList = firstList
  if (filter !== 'all') {
    filteredEventList = firstList.filter(item => item.type === filter)
  }

  function handleFilterOnClick({ type }) {
    setFilter(type)
  }

  return (
    <StyledPageTimeLine>
      <header>
        <EventFilter
          typeList={typeList}
          filter={filter}
          onFilterClick={handleFilterOnClick}
        />
        <H2 title="Zeitleiste" />
      </header>
      <EventList eventList={filteredEventList} />
    </StyledPageTimeLine>
  )
}
