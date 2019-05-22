import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSkill = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;
`

export default function Skill({ name, progress }) {
  return (
    <StyledSkill>
      {name + ' '} {progress + '%'}
    </StyledSkill>
  )
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
}
Skill.defaultProps = {
  progress: 0,
}
