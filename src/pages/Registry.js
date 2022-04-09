import React from 'react';

import registry from '../img/registry.jpeg';
import zolaLogo from '../img/zolalogo.jpeg';

function Registry() {
    return (
        <div className='rsvpPage'>
            <img src={registry} className="normalPic" />
            <br></br>
            <img src={zolaLogo} className="zolaLogo" />
            <br></br>
            <div className='buttonWrapper'>
                <a href="https://www.zola.com/registry/collection-item/624df2776af8ff28c43ab13b" target="_blank">
                    <button type='submit'>CONTRIBUTE TO OUR NEWLYWED FUND</button>
                </a>
            </div>
        </div >
    );
}

export default Registry;