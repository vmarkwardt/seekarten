import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './commons/GlobalStyle'
import Header from './header/Header'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import ChartPage from './chartPage/ChartPage'
import { setLocal, getLocal } from './utils'
import CertificateFormPage from './certificateForm/CertificateFormPage'

function App() {
  const [chartList, setChartList] = useState(
    getLocal('chartList') || mockData.chartList || []
  )

  function handleProgressChange({
    chartIndex,
    categoryIndex,
    skillIndex,
    progress,
  }) {
    const chartListCopy = [...chartList]
    const skill =
      chartListCopy[chartIndex].categories[categoryIndex].skillList[skillIndex]

    // update progress
    skill.progress = Number(progress)

    // update changeDate
    if (skill.changeHistory) {
      skill.changeHistory.push({
        changeDate: Date.now(),
        progress: Number(progress),
      })
    } else {
      skill.changeHistory = [
        { changeDate: Date.now(), progress: Number(progress) },
      ]
    }
    setChartList(chartListCopy)
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
          <Route path={'/certificate'} component={CertificateFormPage} />
          <Route path="/" component={PageAreaOverview} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
