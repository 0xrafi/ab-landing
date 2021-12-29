import React from 'react';
import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import homePic from './img/BrindaAdit-Engagement.jpeg';
import stylizedLogo from './img/AB-logo.svg';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Router>
          <div className="Header">
            <img src={stylizedLogo} className="stylizedLogo" alt="stylizedLogo" />
            <Navbar />
          </div>
          
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div> 
  );
}

export default App;
