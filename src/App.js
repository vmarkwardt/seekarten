import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import CategoryPage from './commons/categoryPage/CategoryPage'
import mockCategory from './mockdata'

function App() {
  const mockCategoryList = mockCategory.subcategories
  console.log(mockCategoryList)

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
        <Switch>
          <Route
            path="/seekarten"
            render={props => (
              <CategoryPage categoryList={mockCategoryList} {...props} />
            )}
          />
          <Route path="/" component={PageAreaOverview} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
