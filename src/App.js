import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalSyle from './GlobalStyle';
import AreaLink from './AreaLink';

function App() {
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
      <header className="App-header" />
      <p>Seekarten</p>
      <AreaLink name="Ich" />
      <AreaLink name="Wir" />
      <AreaLink name="Welt" />
    </div>
  );
}
export default App;
