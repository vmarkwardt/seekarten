import React from 'react'
import ChartLink from '../commons/ChartLink'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubNav = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  height: auto;

  opacity: 1;
  transition: height 300ms, opacity 300ms;

  &.hide {
    opacity: 0;
    height: 0px;
    transition: height 100ms, opacity 100ms;
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
