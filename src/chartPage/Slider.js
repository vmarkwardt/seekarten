import React from 'react'
import styled from 'styled-components'

const StyledSlider = styled.input`
  border-radius: 5px;
  height: 15px;
  margin: 5px;
  padding: 5px;
  opacity: 0.7;
  outline: none;
  transition: opacity 0.15s ease-in-out;
  width: 50%;
`

export default function Slider({ progress, onProgressChange }) {
  return (
    <StyledSlider
      type="range"
      min="0"
      max="100"
      step="10"
      value={progress}
      onChange={event => onProgressChange(event.target.value)}
    />
  )
}