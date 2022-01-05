import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import NavItem from './NavItem.tsx';

function MobileNavbar() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        <CSSTransition
            timeout={300}
            classNames="mobileNavbar"
        >
            <div className='mobileNavbar'>
                <NavItem to="/" text="Home" />
                <NavItem to="/our-story" text="Our Story" />
                <NavItem to="/los-angeles" text="LOS ANGELES" />
                <NavItem to="/rsvp" text="RSVP" />
                <NavItem to="/web3" text="AXB" />
                <NavItem to="/about" text="ABOUT" />
            </div>
        </CSSTransition>
    );
}

export default MobileNavbar;
