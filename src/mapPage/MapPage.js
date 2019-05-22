import React from 'react'
import Category from './Category'

export default function MapPage({ title, categoryList, onProgressChange }) {
  return (
    <main>
      <h2>Seekarte: {title}</h2>
      <ul>
        {categoryList.map(category => (
          <Category
            key={category.name}
            name={category.name}
            skillList={category.skillList}
            onProgressChange={props => onProgressChange({ ...props, title })}
          />
        ))}
      </ul>
    </main>
  )
}
