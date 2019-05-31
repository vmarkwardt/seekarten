import React from 'react'
import Category from './Category'
import { H2 } from '../commons/headings'
import PropTypes from 'prop-types'

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

ChartPage.propType = {
  title: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  onProgressChange: PropTypes.func.isRequired,
}
