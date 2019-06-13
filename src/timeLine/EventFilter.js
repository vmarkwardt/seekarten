import React from 'react'
import styled from 'styled-components'
import { EventFilterButton } from './EventFilterButton'
import PropTypes from 'prop-types'
import { backgroundColor, chartWorldColor } from '../commons/constants'
import { Filter } from 'styled-icons/typicons'

const StyledEventFilter = styled.section`
  background: ${backgroundColor};
  margin: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-evenly;
`

export function EventFilter({ filterList, filter, onFilterClick }) {
  return (
    <StyledEventFilter>
      <Filter title={'Filter:'} size={35} color={chartWorldColor} />
      {filterList.map(filter => (
        <EventFilterButton
          key={filter.type}
          title={filter.title}
          type={filter.type}
          isActive={filter.type === filter}
          onClick={onFilterClick}
        />
      ))}
    </StyledEventFilter>
  )
}

EventFilter.propType = {
  typeList: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterClick: PropTypes.func.isRequired,
}
