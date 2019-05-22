import React from 'react'

export default function CategoryPage(props) {
  const categoryList = props.categoryList
  console.log('CategoryPage: ', categoryList)

  return (
    <main>
      <h2>Seekarte:</h2>
      <ul>
        {categoryList.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}
