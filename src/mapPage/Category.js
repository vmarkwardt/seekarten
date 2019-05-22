import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skill from './Skill'

const StyledCategory = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;

  & > h3 {
    background: #2a9d8f;
    padding: 5px;
  }
`

export default function Category({ name, skillList }) {
  return (
    <StyledCategory key={name}>
      <h3>{name}</h3>
      <ul>
        {skillList.map(skill => (
          <Skill key={skill.name} name={skill.name} progress={skill.progress} />
        ))}
      </ul>
    </StyledCategory>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  skillList: PropTypes.array.isRequired,
}
Category.defaultProps = {
  skillList: [],
}
