import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <div className='Navbar'>
      <div className='line'></div>
      <li>
      <NavLink
          to="/"
          style={(navData) => navData.isActive ? activeStyle : {}}
        >Home</NavLink>
      </li>
      <li>
        <NavLink
          to="/our-story"
          style={(navData) => navData.isActive ? activeStyle : {}}
        >Our Story</NavLink>
      </li>
      <li>
        <NavLink
          to="/los-angeles"
          style={(navData) => navData.isActive ? activeStyle : {}}

        >Los Angeles</NavLink>
      </li>
      <li>
        <NavLink to="/rsvp"
          style={(navData) => navData.isActive ? activeStyle : {}}
        >RSVP</NavLink>
      </li>
      <li>
        <NavLink to="/web3"
          style={(navData) => navData.isActive ? activeStyle : {}}

        >AXB</NavLink>
      </li>
      <li>
        <NavLink to="/about"
          style={(navData) => navData.isActive ? activeStyle : {}}
        >About</NavLink>
      </li>
      <div className='line'></div>
    </div>
  );
}

export default Navbar;
