import React, { useState } from 'react';
import laMap from '../img/LA-map.png';

function LosAngeles() {
    const [password, setPassword] = useState("");
    const onChangeHandler = event => {
        setPassword(event.target.value);
    };
    return (
        <div className='TextContent'>
            {password == "ABLA2022" || password == "abla2022" ?
                <>
                    <a href="https://book.passkey.com/go/DixitDileepWedding2022">
                        <div className='hotelLink'>Wedding Room Block Reservation</div>
                    </a>
                    <b>Wedding Ceremony</b>
                    Friday, June 24th 2022<br></br>
                    Catalina Point<br></br>
                    Ceremony: 8:00 AM<br></br>
                    Lunch to follow<br></br>
                    <i>Indian Formal Attire</i><br></br>

                    <b>Live Music Concert featuring Special Guests</b>
                    Friday, June 24th 2022<br></br>
                    Terranea Pool<br></br>
                    Start time TBD<br></br>
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
                    Long Beach Airport - 24 miles<br></br><br></br>

                    <b>Alternate Accommodations</b>
                    <a href="https://www.google.com/maps/dir/Best+Western+Plus+Redondo+Beach+Inn,+South+Pacific+Coast+Highway,+Redondo+Beach,+CA/Terranea+Resort,+Terranea+Way,+Rancho+Palos+Verdes,+CA/@33.7786354,-118.4183762,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x80dd4b451ccc2d11:0x49a9cce6e3541738!2m2!1d-118.3790036!2d33.8167226!1m5!1m1!1s0x80dd4eabc3f989ef:0xbbbab1aa597c3c86!2m2!1d-118.3979906!2d33.7387937">
                        <div className='hotelLink'>Best Western</div>
                    </a>
                    <a href="https://www.google.com/maps/dir/DoubleTree+by+Hilton+Hotel+San+Pedro+-+Port+of+Los+Angeles,+2800+Via+Cabrillo-Marina,+San+Pedro,+CA+90731/Terranea+Resort,+Terranea+Way,+Rancho+Palos+Verdes,+CA/@33.7314719,-118.3752131,13z/am=t/data=!3m1!5s0x80dd4af055999095:0x20ec39a1412cde1f!4m14!4m13!1m5!1m1!1s0x80dd37c5dc4dc401:0xd842b3a0fcb9aabd!2m2!1d-118.282255!2d33.7184239!1m5!1m1!1s0x80dd4eabc3f989ef:0xbbbab1aa597c3c86!2m2!1d-118.3979906!2d33.7387937!3e0?shorturl=1">
                        <div className='hotelLink'>Double Tree</div>
                    </a>
                    <a href="https://www.google.com/maps/dir/The+Portofino+Hotel+%26+Marina,+260+Portofino+Way,+Redondo+Beach,+CA+90277/Terranea+Resort,+Terranea+Way,+Rancho+Palos+Verdes,+CA/@33.7924802,-118.4116609,13z/am=t/data=!4m13!4m12!1m5!1m1!1s0x80c2b35e24356039:0xb8e9cc348b15be87!2m2!1d-118.3968157!2d33.8446456!1m5!1m1!1s0x80dd4eabc3f989ef:0xbbbab1aa597c3c86!2m2!1d-118.3979906!2d33.7387937?shorturl=1">
                        <div className='hotelLink'>Portofino</div>
                    </a><br></br>

                    <b>Southern Los Angeles Recommendations</b>
                    San Pedro Docks<br></br>
                    Cabrillo Beach and Cabrillo Marine Aquarium<br></br>
                    Portuguese Bend<br></br>
                    Malaga Cove<br></br>
                    Redondo Beach Pier<br></br>
                    San Pedro Harbor<br></br>
                    Catalina Island Tour<br></br>
                    Rat Beach<br></br>
                    Wayfarer’s Chapel<br></br>
                    Shipwreck Hike <br></br>
                    Palos Verdes Peninsula
                </> : <div>
                    <label>Please enter password:</label>
                    <input
                        value={password}
                        onChange={onChangeHandler}
                        name='password'
                        type='text'
                    />
                </div>}
        </div>
    );
}

export default LosAngeles;