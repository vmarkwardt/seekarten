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
  const filteredEventList = getFilteredEventList(sortedEventList)

  function getSortedEventList(eventList) {
    const firstList = [...eventList]
    return firstList.sort((a, b) => (a.date < b.date ? 1 : -1))
  }

  // todo getTypeList in utils
  // mapFilterTitle
  function getTypeTitleList() {
    // let typeList = sortedEventList.map(event => event.type)
    // typeList = [...new Set(typeList)] //unique values
    // typeList.unshift('all')
    return mapFilterTitle.map(filter => filter.title)
  }

  function getFilteredEventList(eventList) {
    if (filter === 'all') {
      return eventList
    } else {
      return eventList.filter(item => item.type === filter)
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
            getOldestDate(filteredEventList) +
            ' bis ' +
            getNewestDate(filteredEventList)}
        </h4>
      </header>
      <EventList eventList={filteredEventList} />
    </StyledPageTimeLine>
  )
}

PageTimeLine.propType = {
  eventList: PropTypes.array.isRequired,
}
