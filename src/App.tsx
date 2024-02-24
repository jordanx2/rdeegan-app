import React from 'react';
import './app/styles/App.css';
import Routing from './app/modules/Routing';
import Header from './app/modules/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  );
}

export default App;
