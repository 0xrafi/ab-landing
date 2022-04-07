import React from 'react';
import NavItem from './NavItem.tsx';

function FullSizeNavbar() {

  return (
    <div className='FullSizeNavbar'>
      <div className='navLine'></div>
      <NavItem to="/" text="Home"/>
      <NavItem to="/our-story" text="Our Story"/>
      <NavItem to="/los-angeles" text="Los Angeles"/>
      <NavItem to="/rsvp" text="RSVP"/>
      <NavItem to="/registry" text="Registry"/>
      <NavItem to="/web3" text="AXB"/>
      <NavItem to="/about" text="About" />
      <div className='navLine'></div>
    </div>
  );
}

export default FullSizeNavbar;
