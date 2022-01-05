import React from 'react';

import axbLogo from '../img/axb-logo.png';

function AXB() {
    return (
        <div className="TextContent">
            Our wedding will be the first Ethereum NFT powered experience of its kind, where 250 pictures from our relationship will be shared
            with our guests before the event and another 250 will be shared after the event. <br></br><br></br>
            <img src={axbLogo} className="normalPic" />
            <h3>DROP DATE 1, 2022</h3>
            <h3>DROP DATE 2, 2022</h3>
        </div>
    );
}

export default AXB;