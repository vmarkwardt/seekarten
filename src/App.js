import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import MapPage from './mapPage/MapPage'
import { setLocal, getLocal } from './utils'

function App() {
  const [mapList, setMapList] = useState(
    getLocal('mapList') || mockData.mapList || []
  )

  function handleProgressChange({ title, category, skillName, progress }) {
    const mapListCopy = [...mapList]
    const mapIndex = mapListCopy.map(map => map.title).indexOf(title)
    const categoryList = mapListCopy[mapIndex].categories
    const categoryIndex = categoryList.map(item => item.name).indexOf(category)
    const skillList = categoryList[categoryIndex].skillList
    const skillIndex = skillList.map(skill => skill.name).indexOf(skillName)

    mapListCopy[mapIndex].categories[categoryIndex].skillList[
      skillIndex
    ].progress = Number(progress)

    setMapList(mapListCopy)
  }

  useEffect(() => {
    setLocal('mapList', mapList)
  }, [mapList])

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
        {mapList.map(item => (
          <Route
            key={item.title}
            path={'/' + item.title.toLowerCase()}
            render={props => (
              <MapPage
                title={item.title}
                categoryList={item.categories}
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
