import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skill from './Skill'
import uid from 'uid'

const StyledSkillList = styled.ul`
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
`

export default function SkillList({ skillList, onProgressChange, color }) {
  return (
    <StyledSkillList>
      {skillList.map((skill, index) => (
        <Skill
          key={uid()}
          name={skill.name}
          progress={skill.progress}
          color={color}
          onProgressChange={params =>
            onProgressChange({ ...params, skillIndex: index })
          }
        />
      ))}
    </StyledSkillList>
  )
}

SkillList.propTypes = {
  skillList: PropTypes.array.isRequired,
  onProgressChange: PropTypes.func.isRequired,
}
SkillList.defaultProps = {
  skillList: [],
}
