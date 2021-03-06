import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Slider from './Slider'

const StyledSkill = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 5px;
  padding: 5px;
`

export default function Skill({ name, progress, onProgressChange, color }) {
  return (
    <StyledSkill>
      <h4>{name + ' '}</h4>
      <Slider
        progress={progress}
        color={color}
        onProgressChange={progress =>
          onProgressChange({ skillName: name, progress })
        }
      />
    </StyledSkill>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onProgressChange: PropTypes.func.isRequired,
}
Skill.defaultProps = {
  progress: 0,
}
