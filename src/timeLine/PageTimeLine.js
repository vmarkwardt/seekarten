import React, { useState } from 'react'
import styled from 'styled-components'
import { PageHeadline } from '../commons/headings'
import EventList from './EventList'
import { EventFilter } from './EventFilter'
import PropTypes from 'prop-types'
import { getFormatedDate } from '../utils'
import { mapFilterTitle } from '../commons/constants'

const StyledPageTimeLine = styled.main`
  margin: 5px;
`

export default function PageTimeLine({ eventList }) {
  const [filter, setFilter] = useState('all')
  const sortedEventList = getSortedEventList(eventList)

  function getSortedEventList(eventList) {
    const firstList = [...eventList]
    return firstList.sort((a, b) => (a.date < b.date ? 1 : -1))
  }

  function getTypeTitleList() {
    return mapFilterTitle.map(filter => filter.title)
  }

  function getFilteredEventList(eventList) {
    console.log('filter: ', filter, eventList)
    if (filter === 'all') {
      return eventList
    } else {
      const text = eventList.filter(item => item.type === filter)
      console.log('filtered: ', text)
      return text
    }
  }

  function getOldestDate(eventList) {
    return getFormatedDate(
      eventList.map(event => event.date)[eventList.length - 1]
    )
  }

  function getNewestDate(eventList) {
    return getFormatedDate(eventList.map(event => event.date)[0])
  }

  function handleFilterOnClick({ type }) {
    setFilter(type)
  }

  return (
    <StyledPageTimeLine>
      <header>
        <EventFilter
          filterList={mapFilterTitle}
          filter={filter}
          onFilterClick={handleFilterOnClick}
        />
        <PageHeadline title={'Zeitleiste '} />
        <h4>
          {'von ' +
            getOldestDate(getFilteredEventList(eventList)) +
            ' bis ' +
            getNewestDate(getFilteredEventList(eventList))}
        </h4>
      </header>
      <EventList
        eventList={getSortedEventList(getFilteredEventList(eventList))}
      />
    </StyledPageTimeLine>
  )
}

PageTimeLine.propType = {
  eventList: PropTypes.array.isRequired,
}
