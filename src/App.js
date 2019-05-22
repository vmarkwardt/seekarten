import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import mockData from './mockdata'
import MapPage from './mapPage/MapPage'

function App() {
  const mapList = mockData.mapList

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
