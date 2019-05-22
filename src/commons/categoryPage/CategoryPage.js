import React from 'react'
import styled from 'styled-components'

const Category = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;

  & > h3 {
    background: #2a9d8f;
    padding: 5px;
  }
`

const Skill = styled.li`
  list-style-type: none;
  margin: 5px;
  padding: 5px;
`
export default function CategoryPage(props) {
  const title = props.title || ''
  const categoryList = props.categoryList || []
  console.log(props)

  return (
    <main>
      <h2>Seekarte: {title}</h2>
      <ul>
        {categoryList.map(category => (
          <Category key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.skillList.map(skill => (
                <Skill key={skill.name}>{skill.name}</Skill>
              ))}
            </ul>
          </Category>
        ))}
      </ul>
    </main>
  )
}
