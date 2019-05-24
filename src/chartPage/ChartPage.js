import React from 'react'
import Category from './Category'
import { H2 } from '../commons/headings'

export default function ChartPage({ title, categoryList, onProgressChange }) {
  return (
    <main>
      <H2 title={'Seekarte: ' + title} />
      <ul>
        {categoryList.map((category, index) => (
          <Category
            key={category.name}
            name={category.name}
            skillList={category.skillList}
            onProgressChange={props =>
              onProgressChange({ ...props, categoryIndex: index })
            }
          />
        ))}
      </ul>
    </main>
  )
}
