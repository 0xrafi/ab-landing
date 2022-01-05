import React, { useState } from 'react';

import NavItem from './NavItem.tsx';

function MobileNavbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);

    function toggleMobileNav() {
        setShowMobileNav(wasOpened => !wasOpened);
    }

    return (
        <div className='mobileNavbarWrapper'>
            {showMobileNav ? <div className='mobileNavbar'>
                <NavItem to="/" text="Home" onClick={toggleMobileNav} />
                <NavItem to="/our-story" text="Our Story" onClick={toggleMobileNav} />
                <NavItem to="/los-angeles" text="LOS ANGELES" onClick={toggleMobileNav} />
                <NavItem to="/rsvp" text="RSVP" onClick={toggleMobileNav} />
                <NavItem to="/web3" text="AXB" onClick={toggleMobileNav} />
                <NavItem to="/about" text="ABOUT" onClick={toggleMobileNav} />
            </div> : null}
            <div className='mobileNavbarButton' onClick={toggleMobileNav}>MENU</div>
        </div>
    );
}

export default MobileNavbar;
