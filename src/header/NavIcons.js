import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'
import {
  DirectionsBoat,
  AddBox,
  FormatListBulleted,
} from 'styled-icons/material'
import { Trophy } from 'styled-icons/icomoon'

const Icon = styled(RRDNavlink)`
  background: #b6e1dd;
  color: #2a9d8f;
  border: 2px solid #2a9d8f;
  border-radius: 3px;
  text-decoration: none;
  margin: 5px;
  padding: 2px;

  &:hover {
    background: #f4a261;
  }

  &.active {
    background: whitesmoke;
  }
`

export default function NavIcons({ toggleChartMenu }) {
  function handleNavButtonOnClick(event, isChartMenuOpen = false) {
    toggleChartMenu(event, isChartMenuOpen)
  }
  return (
    <>
      <Icon
        to={'/charts'}
        onClick={event => handleNavButtonOnClick(event, true)}
      >
        <DirectionsBoat title={'Seekarten'} size={35} />
      </Icon>
      <Icon to={'/certificateList'}>
        <Trophy title={'Zertifikate'} size={35} />
      </Icon>
      <Icon to={'/certificate'}>
        <AddBox title={'Zertifikat eintragen'} size={35} />
      </Icon>
      <Icon to={'/timeLine'}>
        <FormatListBulleted title={'Zeitleiste'} size={35} />
      </Icon>
    </>
  )
}
