import React from 'react'
import styled from 'styled-components'

const StyledSlider = styled.input`
  margin: 5px;
  padding: 5px;
  width: 50%;
  height: 15px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.15s ease-in-out;
`

export default function Slider({ progress, onProgressChange }) {
  return (
    <StyledSlider
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={onProgressChange}
    />
  )
}
