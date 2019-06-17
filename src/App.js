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
import {
  getChartsOfUser,
  getCertificatesOfUser,
  patchCertificates,
  patchCharts,
  postCertificates,
} from './services'
import MySunburst from './vis/MySunburst'

function App() {
  const [chartList, setChartList] = useState(
    getLocal('chartList') || mockData.chartList || []
  )

  const [certificateList, setCertificateList] = useState(
    getLocal('certificateList') || mockCertificates || []
  )

  const [editCertificate, setEditCertificate] = useState('')
  const [userId, setUserId] = useState('Thea')

  const [isChartsMenuOpen, setIsChartsMenuOpen] = useState(false)

  function handleChartMenu(event, isChartBtn) {
    event.stopPropagation()
    setIsChartsMenuOpen(isChartBtn ? !isChartsMenuOpen : false)
  }

  useEffect(() => {
    setLocal('certificateList', certificateList)
  }, [certificateList])

  useEffect(() => {
    setLocal('chartList', chartList)
  }, [chartList])

  useEffect(() => {
    fetchChartsOfUser(userId).then(charts => setChartList(charts[0].chartList))
    fetchCertificatesOfUser(userId).then(res => {
      res.length > 0
        ? setCertificateList(res[0].certificateList)
        : postCertificates(userId, mockCertificates)
    })
  }, [])

  async function fetchChartsOfUser(userId) {
    try {
      const res = await getChartsOfUser(userId)
      return res
    } catch (e) {
      return 'ERROR getChartsOfUser() at App.js: ' + e.message
    }
  }

  async function fetchCertificatesOfUser(userId) {
    try {
      const res = await getCertificatesOfUser(userId)
      return res
    } catch (e) {
      return 'ERROR getCertificatesOfUser() at App.js: ' + e.message
    }
  }

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
    updateChartList(userId, chartListCopy)
  }

  function handleFormCertificateSubmit(newEntry, history) {
    const indexNewEntry = getIndexOfCertificate(newEntry._id)
    if (indexNewEntry < 0) {
      const entry = { ...newEntry }
      delete entry._id
      const newCertificateList = [entry, ...certificateList]
      setCertificateList([...newCertificateList])
      // post in DB
      updateCertificates(userId, newCertificateList)
      setCertificateList([newEntry, ...certificateList])
    } else {
      const certListCopy = [...certificateList]
      certListCopy[indexNewEntry] = newEntry
      setCertificateList(certListCopy)
      updateCertificates(userId, certListCopy)
    }

    setEditCertificate('')
    history.push('/certificateList')
  }

  function updateCertificates(userId, certificateList) {
    patchCertificates(userId, certificateList)
  }
  function updateChartList(userId, chartList) {
    patchCharts(userId, chartList)
  }

  function handleDeleteCertificate(id) {
    let certListCopy = [...certificateList]
    const index = getIndexOfCertificate(id)
    certListCopy = [
      ...certListCopy.slice(0, index),
      ...certListCopy.slice(index + 1),
    ]

    setCertificateList(certListCopy)
    updateCertificates(userId, certListCopy)
  }

  function getIndexOfCertificate(id) {
    return certificateList.map(cert => cert._id).indexOf(id)
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
        <Header
          linkList={navLinkList}
          handleChartMenu={handleChartMenu}
          isChartsMenuOpen={isChartsMenuOpen}
        />
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
          <Route path="/vis" render={() => <MySunburst data={chartList} />} />
          <Route
            exact
            path="/"
            render={() => {
              setIsChartsMenuOpen(true)
              return <Redirect to="/charts/ich" />
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
