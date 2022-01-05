import React from 'react';

import nostalgia from '../img/nostalgia.png';
import diamondHands from '../img/diamond-hands.png';
import lightbulb from '../img/lightbulb.png';
import crypto from '../img/crypto.png';


function About() {
    return (
        <div className="TextContent">
            <img src={nostalgia} className="miniLogo" />
            In the old days, photos were a scarce and precious resource.
            Wedding albums were a collection of rare and meaningful moments.
            AXBInfinity is a return to this through NFTs.
            <br></br><br></br>
            <img src={diamondHands} className="miniLogo" />
            Why are we doing this? We see the real use in the new technologies
            that NFTs and crypto can bring. We hope that through our wedding you’ll
            have a chance to participate in a new digital future where memories are
            once again scarce and tradeable.
            <br></br><br></br>
            <img src={lightbulb} className="miniLogo" />
            NFTs? Crypto? Ethereum? For many of our guests, all of this might be
            quite overwhelming. Don’t worry. Check out our onboarding resource to
            learn more and get started.
            <br></br><br></br>
            <img src={crypto} className="miniLogo" />
            A unique digital , shareable moment will be created for you - one of
            one out of 250 limited tokens. You will own a piece of the first
            digitally commemorated wedding!
            <br></br><br></br>
        </div>
    );
}

export default About;