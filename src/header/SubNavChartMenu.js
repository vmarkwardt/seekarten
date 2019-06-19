import React, { useState, useEffect } from 'react'
import ChartLink from '../commons/ChartLink'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  chartIColor,
  chartWeColor,
  chartWorldColor,
} from '../commons/constants'

// left: -53px;
const SubNav = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  height: auto;

  position: absolute;
  top: 58px;
  left: -14%;
  width: 100vw;
  opacity: 1;
  transition: all 300ms ease-in-out;

  &.hide {
    position: absolute;
    top: 55px;
    left: 135px;

    opacity: 0;
    height: 0;
    width: 0;
    transition: all 100ms ease-in-out;
    overflow: hidden;

    &.hidden {
      display: none;
    }
  }
`

export default function SubNavChartMenu({ isOpen }) {
  const [hidden, setHidden] = useState(false)
  useEffect(() => {
    return () => {
      console.log(hidden)
    }
  }, [hidden])
  function getClassName(isOpen) {
    if (isOpen) {
      return ''
    } else if (hidden) {
      return 'hide, hidden'
    } else {
      return 'hide'
    }
  }

  function handleAnimationEnd() {
    // console.log('transition END =isOpen:', isOpen)
    // setHidden(!isOpen)
  }
  // onAnimationEnd={setHidden(!isOpen)}
  return (
    <SubNav
      className={isOpen ? '' : 'hide'}
      onTransitionEnd={handleAnimationEnd()}
    >
      <ChartLink
        name="Ich"
        btnColor={chartIColor}
        path="/charts/ich"
        className={getClassName(isOpen)}
      />
      <ChartLink
        name="Wir"
        btnColor={chartWeColor}
        path="/charts/wir"
        className={isOpen ? '' : 'hide'}
      />
      <ChartLink
        name="Welt"
        btnColor={chartWorldColor}
        path="/charts/welt"
        className={isOpen ? '' : 'hide'}
      />
    </SubNav>
  )
}

SubNavChartMenu.propType = {
  isOpen: PropTypes.bool,
}
