import React from 'react'

export default function CategoryPage(props) {
  const categoryList = props.categoryList

  return (
    <main>
      <h2>Seekarte:</h2>
      <ul>
        {categoryList.map(category => (
          <li key={category.name}>
            <h3>{category.name}</h3>
            <ul>
              {category.skillList.map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}
