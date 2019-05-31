import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SkillList from './SkillList'
import ProgressBar from '../commons/ProgressBar'
import { H3 } from '../commons/headings'

const StyledCategory = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;
  & > h3 {
    padding: 5px;
  }
`
const StyledHeader = styled.header`
  background: #b6e1dd;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`

export default function Category({ name, skillList, onProgressChange }) {
  return (
    <StyledCategory key={name}>
      <StyledHeader>
        <H3 title={name} />
        <ProgressBar
          progress={
            skillList.reduce(
              (accumulator, currentSkill) =>
                accumulator + currentSkill.progress,
              0
            ) / skillList.length
          }
          color={'#2a9d8f'}
        />
      </StyledHeader>
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
  onProgressChange: PropTypes.func.isRequired,
}
Category.defaultProps = {
  skillList: [],
}
