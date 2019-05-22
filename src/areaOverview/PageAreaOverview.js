import React from 'react'
import AreaLink from '../commons/AreaLink'

export default function PageAreaOverview() {
  return (
    <main>
      <header className="App-header">
        <h1>Seekarten</h1>
      </header>
      <AreaLink name="Ich" btnColor="#e76f51" path="/seekarten" />
      <AreaLink name="Wir" btnColor="#f4a261" path="/seekarten" />
      <AreaLink name="Welt" btnColor="#2a9d8f" path="/seekarten" />
    </main>
  )
}
