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
  const isMobile = window.innerWidth < 600;
  return (
    <div className="App">
      <div className='bg'></div>
      <div className="Container">
        <Router>
          <div className="Header">
            <img src={stylizedLogo} className="stylizedLogo" alt="stylizedLogo" />
            {!isMobile && <Navbar />}
          </div>
          
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/our-story' element={<OurStory />} />
            <Route path='/los-angeles' element={<LosAngeles />} />
            <Route path='/rsvp' element={<RSVP />} />
            <Route path='/web3' element={<AXB />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
      </div>
    </div> 
  );
}

export default App;
