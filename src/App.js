import React from 'react';
import './App.css';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import LosAngeles from './pages/LosAngeles';
import RSVP from './pages/RSVP';
import AXB from './pages/AXB';
import About from './pages/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import stylizedLogo from './img/AB-logo.svg';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Router>
          <div className="Header">
            <img src={stylizedLogo} className="stylizedLogo" alt="stylizedLogo" />
            <Navbar />
          </div>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<OurStory />} />
            <Route path='/' element={<LosAngeles />} />
            <Route path='/' element={<RSVP />} />
            <Route path='/' element={<AXB />} />
            <Route path='/' element={<About />} />
          </Routes>
        </Router>
      </div>
    </div> 
  );
}

export default App;
