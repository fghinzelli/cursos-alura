import React, { Component } from 'react';
import Timeline from './componentes/Timeline';
import Header from './componentes/Header';

function App() {
  return (
    <div id="root">
      <div className="main">
        <Header/>
        <Timeline/>
      </div>
    </div>
  );
}

export default App;
