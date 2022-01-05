import React from 'react';

import homePic from '../img/BrindaAdit-Engagement.jpeg';
import divider from '../img/divider-logo.jpeg';

function Home() {
    return (
        <div className='PageContent'>
            <div className='homePicWrapper'>
            <img src={homePic} className="homePic" />
            Photographer Credit
            </div>

            <div className="ourStoryPage">
                <h2>COME CELEBRATE WITH US!</h2>
                <img src={divider} className="divider" />
                {/* <div className="oldLine"></div> */}
                <h2>#abinfinity</h2><br></br>
                <h3>THE WEDDING DATE, 2022</h3>
                <img src={divider} className="divider" />
                {/* <div className="oldLine"></div> */}
                Our wedding will be the first experience of its kind, turning our cherished moments into infinitely collectible and timeless tradeable tokens on the Ethereum blockchain.
            </div>

        </div>
    );
}

export default Home;