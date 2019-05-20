import React from 'react';
import AreaLink from '../commons/AreaLink';

export default function PageAreaOverview() {
  return (
    <section>
      <header className="App-header">
        <h1>Seekarten</h1>
      </header>
      <AreaLink name="Ich" btnColor="e76f51" />
      <AreaLink name="Wir" btnColor="#f4a261" />
      <AreaLink name="Welt" btnColor="#2a9d8f" />
    </section>
  );
}
