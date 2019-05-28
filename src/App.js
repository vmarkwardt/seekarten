import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalStyle from './commons/GlobalStyle'
import Header from './header/Header'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import { mockData, mockCertificates } from './mockdata'
import ChartPage from './chartPage/ChartPage'
import { setLocal, getLocal } from './utils'
import CertificateFormPage from './certificateForm/CertificateFormPage'
import PageCertificateOverview from './certificateOverview/PageCertificateOverview'
import PageTimeLine from './timeLine/PageTimeLine'

function App() {
  const [chartList, setChartList] = useState(
    getLocal('chartList') || mockData.chartList || []
  )

  const [certificateList, setCertificateList] = useState(
    getLocal('certificateList') || mockCertificates || []
  )

  const [editCertificate, setEditCertificate] = useState('')

  useEffect(() => {
    setLocal('certificateList', certificateList)
  }, [certificateList])

  useEffect(() => {
    setLocal('chartList', chartList)
  }, [chartList])

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

  function handleFormCertificateSubmit(newEntry, history) {
    const indexNewEntry = getIndexOfCertificate(newEntry.id)
    if (indexNewEntry < 0) {
      setCertificateList([newEntry, ...certificateList])
    } else {
      const certListCopy = certificateList.slice()
      certListCopy[indexNewEntry] = newEntry
      setCertificateList(certListCopy)
    }

    setEditCertificate('')
    history.push('/certificateList')
  }

  function handleDeleteCertificate(id) {
    let certListCopy = certificateList.slice()
    const index = getIndexOfCertificate(id)
    certListCopy = [
      ...certListCopy.slice(0, index),
      ...certListCopy.slice(index + 1),
    ]

    setCertificateList(certListCopy)
  }

  function getIndexOfCertificate(id) {
    return certificateList.map(cert => cert.id).indexOf(id)
  }
  function handleEditCertificate(id, history) {
    setEditCertificate(certificateList[getIndexOfCertificate(id)])
    history.push('/certificate')
  }

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
          <Route
            path={'/certificate'}
            render={props => (
              <CertificateFormPage
                onFormSubmit={handleFormCertificateSubmit}
                editCertificate={editCertificate}
                {...props}
              />
            )}
          />
          <Route
            path={'/certificateList'}
            render={props => (
              <PageCertificateOverview
                certificateList={certificateList}
                onDeleteCertificate={handleDeleteCertificate}
                onEditCertificate={handleEditCertificate}
                history={props.history}
              />
            )}
          />
          <Route
            path="/timeLine"
            render={() => <PageTimeLine eventList={certificateList} />}
          />
          <Route path="/" component={PageAreaOverview} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
