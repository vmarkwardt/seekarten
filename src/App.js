import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import CategoryPage from './commons/categoryPage/CategoryPage'
import mockCategory from './mockdata'

function App() {
  const mockCategoryList = mockCategory.categoryList[0].subcategories
  const title = mockCategory.categoryList[0].category
  console.log(mockCategory.categoryList)
  const categoryList = mockCategory.categoryList

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
          {categoryList.map(category => (
            <Route
              key={title}
              path={'/' + category.category.toLowerCase()}
              render={props => (
                <CategoryPage
                  title={title}
                  categoryList={mockCategoryList}
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
