import React from 'react'
import styled from 'styled-components'
import { H2 } from '../commons/headings'

const StyledPageTimeLine = styled.main``

export default function PageTimeLine({ eventList }) {
  return (
    <StyledPageTimeLine>
      <header>
        <H2 title="Zeitleiste" />
      </header>
      <ul>
        {eventList.map(event => (
          <li>
            {event.date} {event.title}
          </li>
        ))}
      </ul>
    </StyledPageTimeLine>
  )
}
