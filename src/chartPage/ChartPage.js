import React from 'react'
import Category from './Category'
import { PageHeadline } from '../commons/headings'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledChartHeader = styled.header``

export default function ChartPage({ title, categoryList, onProgressChange }) {
  return (
    <main>
      <StyledChartHeader>
        <PageHeadline title={'Seekarte: ' + title.toUpperCase()} />
      </StyledChartHeader>
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
