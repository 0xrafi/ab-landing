import React from 'react';

import homePic from '../img/BrindaAdit-Engagement.jpeg';
import divider from '../img/divider-logo.jpeg';

function Home() {
    return (
        <>
            <div className='homePicWrapper'>
                <img src={homePic} className="normalPic" />
                Alchemedia Studios NY
            </div>
            <div className="TextContent">
                <h2>COME CELEBRATE WITH US!</h2>
                <h3>JUNE 24-25, 2022</h3>
                <img src={divider} className="dividerImage" />
                Our wedding will be the first experience of its kind, turning our cherished moments into infinitely collectible and timeless tradeable tokens on the Ethereum blockchain.
                <h2>#abinfinity</h2>
            </div>
        </>
    );
}

export default Home;