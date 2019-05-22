import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import ChartPage from './mapPage/ChartPage'
import { setLocal, getLocal } from './utils'
import styled from 'styled-components'

function App() {
  const [chartList, setchartList] = useState(mockData.chartList || [])
  //getLocal('chartList') ||

  function handleProgressChange({
    chartIndex,
    categoryIndex,
    skillIndex,
    progress,
  }) {
    
    const chartListCopy = [...chartList]

    chartListCopy[chartIndex].categories[categoryIndex].skillList[
      skillIndex
    ].progress = Number(progress)

    setchartList(chartListCopy)
  }

  useEffect(() => {
    setLocal('chartList', chartList)
  }, [chartList])

  const Navigation = styled.nav``
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
        <Navigation>
          {' '}
          NAvigaion
          {chartList.map((chart, index) => (
            <NavLink title={chart.title} to={'/' + chart.title.toLowerCase()} />
          ))}
          Nav ENde
        </Navigation>
        <Route path="/" component={PageAreaOverview} />
        {console.log(chartList)}
        {chartList.map((chart, index) => (
          <Route
            key={chart.title}
            path={'/' + chart.title.toLowerCase()}
            render={props => (
              <ChartPage
                title={chart.title}
                categoryList={chart.categories}
                onProgressChange={params =>
                  handleProgressChange({ ...params, chartIndex: index })
                }
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
