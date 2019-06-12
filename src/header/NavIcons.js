import React from 'react'
import styled from 'styled-components'
import { NavLink as RRDNavlink } from 'react-router-dom'
import {
  DirectionsBoat,
  AddBox,
  FormatListBulleted,
} from 'styled-icons/material'
import { Trophy } from 'styled-icons/icomoon'
import { DoughnutChart } from 'styled-icons/boxicons-solid'
import PropTypes from 'prop-types'

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
  function handleNavButtonOnClick(event) {
    toggleChartMenu(event)
  }
  return (
    <>
      <Icon
        to={'/charts'}
        onClick={event => handleNavButtonOnClick(event )}
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
      <Icon to={'/vis'}>
        <DoughnutChart title={'Sunburst'} size={35} />
      </Icon>
    </>
  )
}

NavIcons.propType = {
  toggleChartMenu: PropTypes.func.isRequired,
}
