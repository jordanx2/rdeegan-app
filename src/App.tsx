import React from 'react';
import './app/styles/App.css';
import Routing from './app/modules/Routing';
import Navigation from './app/modules/Navigation';
import Header from './app/modules/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <Routing/>
    </div>
  );
}

export default App;
