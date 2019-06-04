import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyle from './commons/GlobalStyle'
import Header from './header/Header'
import { mockData, mockCertificates } from './mockdata'
import ChartPage from './chartPage/ChartPage'
import { setLocal, getLocal, getAllSkillEvents, getFormatedDate } from './utils'
import CertificateFormPage from './certificateForm/CertificateFormPage'
import PageCertificateOverview from './certificateOverview/PageCertificateOverview'
import PageTimeLine from './timeLine/PageTimeLine'
import { navLinkList } from './commons/constants'

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

  function getAllEvents({ certificateList, chartList }) {
    const allEvents = [...certificateList].map(certificate => ({
      ...certificate,
      type: 'certificate',
    }))
    allEvents.push(...getAllSkillEvents(chartList))
    return allEvents
  }

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
      //changeHistory key already exists now check date
      const history = skill.changeHistory
      const historyDates = history.map(entry => entry.changeDate)
      const today = getFormatedDate(new Date())
      const indexToday = historyDates.indexOf(today)
      if (indexToday < 0) {
        // there are dates, but not today
        skill.changeHistory.push({
          changeDate: today,
          progress: Number(progress),
        })
      } else {
        // there is an entry for today already
        skill.changeHistory[indexToday].progress = Number(progress)
      }
    } else {
      // changeHistory key does not exist
      skill.changeHistory = [
        { changeDate: getFormatedDate(new Date()), progress: Number(progress) },
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
              path={'/charts/' + chart.title.toLowerCase()}
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
                history={props.history}
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
            render={() => (
              <PageTimeLine
                eventList={getAllEvents({ chartList, certificateList })}
              />
            )}
          />
          <Route path="/" render={() => <Redirect to="/charts/ich" />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
