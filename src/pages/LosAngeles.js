import React from 'react';
import laMap from '../img/LA-map.png';

function LosAngeles() {
    return (
        <div className='PageContent'>
            <div className='ourStoryPage'>
                <b>Wedding Ceremony</b>
                Friday, June 24th 2022<br></br>
                Catalina Point<br></br>
                Ceremony: 8:00 AM<br></br>
                Lunch to follow<br></br>
                Breakfast served at the Channel Islands Suite from 6:30 AM<br></br>
                <i>Indian Formal Attire</i><br></br>

                <b>Live Music Concert featuring Special Guests</b>
                Friday, June 24th 2022<br></br>
                Terranea Pool<br></br>
                Beer, Wine & Hors d’oeuvres: 7:00 PM<br></br>
                <i>Beach Concert Attire</i><br></br>

                <b>Wedding Reception</b>
                Saturday, June 25th 2022<br></br>
                The Catalina Room<br></br>
                Cocktails: 6:00 PM<br></br>
                <i>Cocktail Attire</i><br></br>

                <b>RESORT ADDRESS</b>
                100 Terranea Way<br></br>
                Rancho Palos Verdes, CA 90275<br></br><br></br>
                <img src={laMap} className="laPic" alt="laPic" /><br></br>

                Hollywood - 37 miles<br></br>
                Los Angeles International Airport (LAX) - 17 miles<br></br>
                Long Beach Airport - 24 miles<br></br>
            </div>
        </div>
    );
}

export default LosAngeles;