import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import FullSizeNavbar from './components/FullSizeNavbar';
import MobileNavbar from './components/MobileNavbar';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import LosAngeles from './pages/LosAngeles';
import RSVP from './pages/RSVP';
import AXB from './pages/AXB';
import About from './pages/About';

import stylizedLogo from './img/AB-logo.svg';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth < 600;

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return (
    <div className="App">
      <div className='bg'></div>
      {isMobile && <MobileNavbar />}
      <div className="Container">
        <div className="Header">
          <img src={stylizedLogo} className="stylizedLogo" />
          {!isMobile && <FullSizeNavbar />}
        </div>
        <div className='PageContent'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/our-story' element={<OurStory />} />
            <Route path='/los-angeles' element={<LosAngeles />} />
            <Route path='/rsvp' element={<RSVP />} />
            <Route path='/web3' element={<AXB />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
