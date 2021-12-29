import React from 'react';
import {  NavLink } from "react-router-dom";

function Navbar() {
  const isActive = {
    fontWeight: "bold",
  };

    return (
    <div className='Navbar'>
        <div className='line'></div>
        <li>
          <NavLink to="/" style={isActive}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/our-story">Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/los-angeles">Los Angeles</NavLink>
        </li>
        <li>
          <NavLink to="/rsvp">RSVP</NavLink>
        </li>
        <li>
          <NavLink to="/web3">AXB</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <div className='line'></div>
    </div>
    );
}

export default Navbar;
