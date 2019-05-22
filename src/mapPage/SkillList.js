import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skill from './Skill'

const StyledSkillList = styled.ul`
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
`

export default function SkillList({ skillList, onProgressChange }) {
  return (
    <StyledSkillList>
      {skillList.map(skill => (
        <Skill
          key={skill.name}
          name={skill.name}
          progress={skill.progress}
          onProgressChange={onProgressChange}
        />
      ))}
    </StyledSkillList>
  )
}

SkillList.propTypes = {
  skillList: PropTypes.array.isRequired,
}
SkillList.defaultProps = {
  skillList: [],
}
