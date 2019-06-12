import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { chartWorldColor } from '../commons/constants'

const StyledSlider = styled.input`
  opacity: 0.7;
  border-radius: 5px;
  height: 15px;
  margin: 5px;
  padding: 5px;
  outline: none;
  transition: opacity 0.15s ease-in-out;
  width: 50%;

  -webkit-appearance: none;
  background: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 2px solid ${props => props.color};
    background: #ddd;
    height: 18px;
    width: 18px;
    margin-top: -8px;
    border-radius: 99px;
  }
  &::-webkit-slider-runnable-track {
    height: 5px;
    background: #ddd;
    border-radius: 15px;
  }
`

export default function Slider({ progress, onProgressChange, color }) {
  return (
    <StyledSlider
      type="range"
      min="0"
      max="100"
      step="5"
      value={progress}
      color={color}
      onChange={event => onProgressChange(event.target.value)}
    />
  )
}

Slider.propTypes = {
  progress: PropTypes.number.isRequired,
  onProgressChange: PropTypes.func.isRequired,
}
