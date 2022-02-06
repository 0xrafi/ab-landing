import React, { useState, useEffect } from 'react';

import rsvpPic from '../img/ABRsvpEngagementPic.jpeg';

function RSVP() {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onChangeHandler = event => {
        setPassword(event.target.value);
    };
    // useEffect(() => {
    //     window.addEventListener("load", function() {
    //         const form = document.getElementById('my-form');
    //         form.addEventListener("submit", function(e) {
    //           e.preventDefault();
    //           const data = new FormData(form);
    //           const action = e.target.action;
    //           fetch(action, {
    //             method: 'POST',
    //             body: data,
    //           })
    //           .then(() => {
    //             alert("Success!");
    //           })
    //         });
    //       });          
    // }, []);
    return (
        <div className='rsvpPage'>
            <img src={rsvpPic} className="normalPic" />
            Please RSVP by April 15th, 2022.<br></br><br></br>

            {password == "ABLA2022" || password == "abla2022" ?

                <form method="POST" action="https://script.google.com/macros/s/AKfycbzKWk4MUWW_tqA9ji5kR_kGnem7eRv1BJXlfuOLJHwQa4uMlqL60KyvjKzAzh1-WTs5/exec" id="my-form">
                    <div>
                        <label>Name *</label>
                        <input
                            name='Name'
                            type='text'
                            required
                        />
                    </div>
                    <br></br>
                    <div>
                        <label>How many guests will be in your party? *</label>
                        <select name="NumGuests">
                            <option value="oneGuest">1</option>
                            <option value="twoGuest">2</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the wedding? *</label>
                        <select name="AttendingWedding">
                            <option value="yesWedding">Yes</option>
                            <option value="noWedding">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the concert? *</label>
                        <select name="AttendingConcert">
                            <option value="yesConcert">Yes</option>
                            <option value="noConcert">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the reception? *</label>
                        <select name="AttendingReception">
                            <option value="yesReception">Yes</option>
                            <option value="noReception">No</option>
                        </select>
                    </div>
                    <br></br>
                    <button type="submit">Send</button>
                </form> :
                <div>
                    <label>Enter the password:</label>
                    <input
                        value={password}
                        onChange={onChangeHandler}
                        name='password'
                        type='text'

                    />
                    <br></br><br></br>
                    <label>Enter your email:</label>
                    <input
                        value={email}
                        name='email'
                        type='text'
                    />
                </div>

            }
        </div>
    );
}

export default RSVP;