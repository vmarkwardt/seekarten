import React from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../commons/constants'
import { DirectionsBoat } from 'styled-icons/material'
import { Trophy } from 'styled-icons/icomoon'
import { chartWorldColor } from '../commons/constants'

const StyledEventListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
  border-left: dotted ${chartWorldColor} 2px;
  background-color: ${props =>
    props.type === 'certificate' ? backgroundColor : 'whitesmoke'};
`
const StyledDate = styled.span`
  color: ${chartWorldColor};
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
    background-color: ${chartWorldColor};
    text-align: center;
  }
`

const StyledTitle = styled.span`
  padding: 8px;
`

const StyledIcon = styled.div`
  color: #2a9d8f;
  margin: 2px;
`

export default function EventListItem({ title, date, type }) {
  return (
    <StyledEventListItem type={type}>
      <div>
        <StyledDate>{date}</StyledDate>
        <StyledTitle>{title}</StyledTitle>
      </div>
      <StyledIcon>
        {type === 'certificate' ? (
          <Trophy title={'Zertifikate'} size={15} />
        ) : (
          <DirectionsBoat  title={'Zertifikate'} size={15} />
        )}
      </StyledIcon>
    </StyledEventListItem>
  )
}
