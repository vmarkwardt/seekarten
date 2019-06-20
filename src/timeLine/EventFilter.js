import React from 'react'
import styled from 'styled-components'
import { EventFilterButton } from './EventFilterButton'
import PropTypes from 'prop-types'
import { chartWorldColor } from '../commons/constants'
import { Filter } from 'styled-icons/typicons'

const StyledEventFilter = styled.section`
  padding: 5px;
  display: flex;
`
const StyledIcon = styled.div`
  margin-left: 5px;
`

export function EventFilter({ filterList, filter, onFilterClick }) {
  return (
    <StyledEventFilter>
      <StyledIcon>
        <Filter title={'Filter:'} size={35} color={chartWorldColor} />
      </StyledIcon>
      {filterList.map(filterItem => (
        <EventFilterButton
          key={filterItem.type}
          title={filterItem.title}
          type={filterItem.type}
          isActive={filterItem.type === filter}
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
