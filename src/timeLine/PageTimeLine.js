import React, { useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../commons/headings'
import EventList from './EventList'

const StyledPageTimeLine = styled.main`
  margin: 5px;
`

export default function PageTimeLine({ eventList }) {
  const firstList = eventList.slice()
  firstList.sort((a, b) => (a.date < b.date ? 1 : -1))

  const [filteredEventList, setFilteredEventList] = useState(firstList)
  return (
    <StyledPageTimeLine>
      <header>
        <H2 title="Zeitleiste" />
      </header>
      <EventList eventList={filteredEventList} />
    </StyledPageTimeLine>
  )
}
