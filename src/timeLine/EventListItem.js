import React from 'react'
import styled from 'styled-components'
import { DirectionsBoat } from 'styled-icons/material'
import { Trophy } from 'styled-icons/icomoon'
import { chartWorldColor, backgroundColor } from '../commons/constants'
import { getFormatedDate } from '../utils'

const ItemWrapper = styled.section`
  border-left: dashed ${chartWorldColor} 1px;
  position: relative;
`

const StyledEventListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1px;
  background-color: ${props =>
    props.type === 'certificate' ? backgroundColor : 'whitesmoke'};
  margin: 5px 0;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);

  &::before {
    position: absolute;
    top: 16px;
    left: -4px;
    content: '';
    border-radius: 50%;
    padding: 3px;
    height: 1px;
    width: 1px;
    background-color: ${chartWorldColor};
    text-align: center;
  }
`
const StyledDate = styled.span`
  color: ${chartWorldColor};
  padding: 8px;
  margin: 0 2px;
`

const StyledTitle = styled.span`
  padding: 8px;
`

const StyledIcon = styled.div`
  color: chartWorldColor;
  margin: 2px;
`

export default function EventListItem({ title, date, type }) {
  return (
    <ItemWrapper>
      <StyledEventListItem type={type}>
        <div>
          <StyledDate>{getFormatedDate(date)}</StyledDate>
          <StyledTitle>{title}</StyledTitle>
        </div>
        <StyledIcon>
          {type === 'certificate' ? (
            <Trophy title={'Zertifikate'} size={15} />
          ) : (
            <DirectionsBoat title={'Zertifikate'} size={15} />
          )}
        </StyledIcon>
      </StyledEventListItem>
    </ItemWrapper>
  )
}
