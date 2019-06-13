import React from 'react'
import ChartLink from '../commons/ChartLink'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubNav = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  height: auto;

  position: absolute;
  top: 65px;
  left: -30px;
  width: 100vw;
  opacity: 1;
  transition: all 300ms ease-in-out;

  &.hide {
    position: absolute;
    top: 50px;
    left: 140px;

    opacity: 0;
    height: 0px;
    width: 35px;
    transition: all 100ms ease-in-out;
  }
`

export default function SubNavChartMenu({ isOpen }) {
  return (
    <SubNav className={isOpen ? '' : 'hide'}>
      <ChartLink name="Ich" btnColor="#e76f51" path="/charts/ich" />
      <ChartLink name="Wir" btnColor="#f4a261" path="/charts/wir" />
      <ChartLink name="Welt" btnColor="#2a9d8f" path="/charts/welt" />
    </SubNav>
  )
}

SubNavChartMenu.propType = {
  isOpen: PropTypes.bool,
}
