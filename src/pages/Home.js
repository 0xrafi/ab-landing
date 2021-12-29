import React from 'react';
import homePic from '../img/BrindaAdit-Engagement.jpeg';

function Home() {
    return(
        <div className='PageContent'>
            <img src={homePic} className="homePic" alt="homePic" />
            COME CELEBRATE WITH US!
            
            <div class="line"></div>
            #abinfinity
            THE WEDDING DATE, 2022
            <div class="line"></div>
            Our wedding will be the first experience of its kind, turning our cherished moments into infinitely collectible and timeless tradeable tokens on the Ethereum blockchain.
        </div>
    );
}

export default Home;