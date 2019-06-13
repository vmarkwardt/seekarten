import React, { useState } from 'react'
import styled from 'styled-components'
import { PageHeadline } from '../commons/headings'
import EventList from './EventList'
import { EventFilter } from './EventFilter'
import PropTypes from 'prop-types'
import { getFormatedDate } from '../utils'

const StyledPageTimeLine = styled.main`
  margin: 5px;
`

export default function PageTimeLine({ eventList }) {
  const [filter, setFilter] = useState('all')

  function getSortedEventList(eventList) {
    const firstList = [...eventList]
    return firstList.sort((a, b) => (a.date < b.date ? 1 : -1))
  }

  // todo getTypeList in utils
  let typeList = getSortedEventList(eventList).map(event => event.type)
  typeList = [...new Set(typeList)] //unique values
  typeList.unshift('all')

  let filteredEventList = getSortedEventList(eventList)
  if (filter !== 'all') {
    filteredEventList = getSortedEventList(eventList).filter(
      item => item.type === filter
    )
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
          typeList={typeList}
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
