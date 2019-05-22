import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SkillList from './SkillList'

const StyledCategory = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;

  & > h3 {
    background: #b6e1dd;
    padding: 5px;
  }
`

export default function Category({ name, skillList, onProgressChange }) {
  return (
    <StyledCategory key={name}>
      <h3>{name}</h3>
      <SkillList
        skillList={skillList}
        onProgressChange={props =>
          onProgressChange({ ...props, category: name })
        }
      />
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
