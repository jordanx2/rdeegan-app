import React from 'react';
import './app/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app/modules/Home';
import Contact from './app/modules/Contact';
import Gallery from './app/modules/Gallery';
import Customers from './app/modules/Customers';
import Testimonials from './app/modules/Testimonials';
import Charity from './app/modules/Charity';
import Services from './app/modules/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="services" Component={Services}></Route>
          <Route path="gallery" Component={Gallery}></Route>
          <Route path="customers" Component={Customers}></Route>
          <Route path="testimonials" Component={Testimonials}></Route>
          <Route path="charity" Component={Charity}></Route>
          <Route path="contact" Component={Contact}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
