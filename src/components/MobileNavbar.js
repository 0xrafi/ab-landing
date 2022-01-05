import React, { useState } from 'react';

import NavItem from './NavItem.tsx';

function MobileNavbar() {
    return (
        <div className='mobileNavbar'>
            <NavItem to="/" text="Home" />
            <NavItem to="/our-story" text="Our Story" />
            <NavItem to="/los-angeles" text="LOS ANGELES" />
            <NavItem to="/rsvp" text="RSVP" />
            <NavItem to="/web3" text="AXB" />
            <NavItem to="/about" text="ABOUT" />
        </div>

    );
}

export default MobileNavbar;
