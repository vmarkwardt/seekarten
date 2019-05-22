import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import ChartPage from './mapPage/ChartPage'
import { setLocal, getLocal } from './utils'

function App() {
  const [chartList, setchartList] = useState(
    getLocal('chartList') || mockData.chartList || []
  )

  function handleProgressChange({ title, category, skillName, progress }) {
    const chartListCopy = [...chartList]
    const chartIndex = chartListCopy.map(map => map.title).indexOf(title)
    const categoryList = chartListCopy[chartIndex].categories
    const categoryIndex = categoryList.map(item => item.name).indexOf(category)
    const skillList = categoryList[categoryIndex].skillList
    const skillIndex = skillList.map(skill => skill.name).indexOf(skillName)

    chartListCopy[chartIndex].categories[categoryIndex].skillList[
      skillIndex
    ].progress = Number(progress)

    setchartList(chartListCopy)
  }

  useEffect(() => {
    setLocal('chartList', chartList)
  }, [chartList])

  return (
    <div className="App">
      <GlobalSyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seekarten</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <BrowserRouter>
      
        <Route path="/" component={PageAreaOverview} />
        {chartList.map(chart => (
          <Route
            key={chart.title}
            path={'/' + chart.title.toLowerCase()}
            render={props => (
              <ChartPage
                title={chart.title}
                categoryList={chart.categories}
                onProgressChange={handleProgressChange}
                {...props}
              />
            )}
          />
        ))}
      </BrowserRouter>
    </div>
  )
}
export default App
