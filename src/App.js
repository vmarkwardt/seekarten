import React from 'react'
import { Helmet } from 'react-helmet'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalSyle from './commons/GlobalStyle'
import PageAreaOverview from './areaOverview/PageAreaOverview'
import CategoryPage from './commons/categoryPage/CategoryPage'
import mockCategory from './mockdata'

function App() {
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
        <Route path="/" component={PageAreaOverview} />
        {categoryList.map(category => (
          <Route
            key={category.category}
            path={'/' + category.category.toLowerCase()}
            render={props => (
              <CategoryPage
                title={category.category}
                categoryList={category.subcategories}
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
