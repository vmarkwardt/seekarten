import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './commons/GlobalStyle'
import Header from './header/Header'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import ChartPage from './chartPage/ChartPage'
import { setLocal, getLocal } from './utils'

function App() {
  const [chartList, setchartList] = useState(
    getLocal('chartList') || mockData.chartList || []
  )

  function handleProgressChange({
    chartIndex,
    categoryIndex,
    skillIndex,
    progress,
  }) {
    const chartListCopy = [...chartList]

    // update progress
    chartListCopy[chartIndex].categories[categoryIndex].skillList[
      skillIndex
    ].progress = Number(progress)

    // update changeDate
    debugger
    if (
      chartListCopy[chartIndex].categories[categoryIndex].skillList[skillIndex]
        .changeHistory
    ) {
      chartListCopy[chartIndex].categories[categoryIndex].skillList[
        skillIndex
      ].changeHistory.push({ dat: Date(), progress: Number(progress) })
    } else {
      chartListCopy[chartIndex].categories[categoryIndex].skillList[
        skillIndex
      ].changeHistory = [{ dat: Date.now(), progress: Number(progress) }]
    }
    setchartList(chartListCopy)
  }

  useEffect(() => {
    setLocal('chartList', chartList)
  }, [chartList])

  const navLinkList = [
    {
      name: 'Ich',
      color: '#e76f51',
    },
    {
      name: 'Wir',
      color: '#f4a261',
    },
    {
      name: 'Welt',
      color: '#2a9d8f',
    },
  ]

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seekarten</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <GlobalStyle />
      <BrowserRouter>
        <Header linkList={navLinkList} />
        <Switch>
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
          <Route path="/" component={PageAreaOverview} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
