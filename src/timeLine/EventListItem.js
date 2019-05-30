import React from 'react'
import styled from 'styled-components'

const StyledEventListItem = styled.li`
  display: flex;
  flex-direction: row;
  padding: 1px;
  border-left: dotted #2a9d8f 2px;
`
const StyledDate = styled.span`
  color: lightgray;
  padding: 8px;
  margin: 0 2px;

  &::before {
    position: absolute;
    left: 12px;
    content: '';
    border-radius: 50%;
    padding: 3px;
    height: 0.3em;
    width: 0.3em;
    background-color: #2a9d8f;
    text-align: center;
  }
`

const StyledTitle = styled.span`
  padding: 8px;
`

export default function EventListItem({ title, date }) {
  return (
    <StyledEventListItem>
      <StyledDate>{date}</StyledDate>
      <StyledTitle>{title}</StyledTitle>
    </StyledEventListItem>
  )
}
