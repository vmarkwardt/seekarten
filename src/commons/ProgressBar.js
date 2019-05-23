import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ProgressBarContainer = styled.div`
  background-color: #ddd;
  display: flex;
  width: 50%;
`
const StyledProgressBar = styled.div`
  width: ${props => props.progress || 0}%;
  background-color: ${props => props.color || '#2a9d8f'};
`

export default function ProgressBar({ progress, color }) {
  return (
    <ProgressBarContainer>
      <StyledProgressBar progress={progress} color={color} />
    </ProgressBarContainer>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number,
  color: PropTypes.string,
}
