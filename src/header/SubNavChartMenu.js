import React from 'react'
import ChartLink from '../commons/ChartLink'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubNav = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
`

export default function SubNavChartMenu({ isOpen }) {
  if (isOpen) {
    return (
      <SubNav>
        <ChartLink name="Ich" btnColor="#e76f51" path="/charts/ich" />
        <ChartLink name="Wir" btnColor="#f4a261" path="/charts/wir" />
        <ChartLink name="Welt" btnColor="#2a9d8f" path="/charts/welt" />
      </SubNav>
    )
  } else {
    return null
  }
}

SubNavChartMenu.propType = {
  isOpen: PropTypes.bool,
}
