import React, { useState, useEffect } from 'react';

const Papa = require("papaparse");

import rsvpPic from '../img/ABRsvpEngagementPic.jpeg';

const parseFile = () => new Promise((resolve) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vRpdEblJlslYiGTcfGCv4keTIYrHg_aceu_iiPalEfXS9VM_IKiIFPqlUN8YEbYwQkWK5qdP0ZwDqcZ/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            resolve(results.data);
        }
    });
});

function RSVP() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [spreadsheetData, setSpreadsheetData] = useState({});

    useEffect(() => {
        const parsedData = parseFile().then((response) => {
            setSpreadsheetData(response);
        })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const guestCounts = Array.from(spreadsheetData);

    const getGuestFromEmail = email => {
        return spreadsheetData.find(function (row) {
            return row.Email.replace(/\s/g, '').toLowerCase() === email.replace(/\s/g, '').toLowerCase();
        });
    };

    const buildOptions = () => {
        var arr = [];
        for (let i = 1; i <= getGuestFromEmail(email).NumberGuests; i++) {
            arr.push(<option value={`${i}`}>{i}</option>)
        }
        return arr;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const form = document.getElementById('my-form');
        const action = event.target.action;
        const data = new FormData(form);
        fetch(action, {
          method: 'POST',
          body: data,
        })
        .then(() => {
          alert("You have successfully RSVPed!");
          window.location.href = "/";
        })
    }

    return (
        <div className='rsvpPage'>
            <img src={rsvpPic} className="normalPic" />
            Please RSVP by April 15th, 2022.<br></br><br></br>

            {(password == "ABLA2022" || password == "abla2022") && getGuestFromEmail(email) ?
                <form method="POST" action="https://script.google.com/macros/s/AKfycbzKWk4MUWW_tqA9ji5kR_kGnem7eRv1BJXlfuOLJHwQa4uMlqL60KyvjKzAzh1-WTs5/exec" id="my-form" onSubmit={onSubmit}>
                    <div id="hide">
                        <input
                            name='Email'
                            value={email}
                            type='text'
                            required
                        />
                    </div>
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
                        <select name="NumberOfGuests">
                            {buildOptions()}
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the wedding? *</label>
                        <select name="AttendingWedding">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the concert? *</label>
                        <select name="AttendingConcert">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div>
                        <label>Are you attending the reception? *</label>
                        <select name="AttendingReception">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <br></br>
                    <div className='buttonWrapper'><button type="submit">RSVP</button></div>
                </form> :
                <div>
                    <label>Enter the password:</label>
                    <input
                        value={password}
                        onChange={event => {
                            setPassword(event.target.value);
                        }}
                        name='password'
                        type='text'

                    />
                    <br></br><br></br>
                    <label>Enter your email:</label>
                    <input
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value);
                        }}
                        name='email'
                        type='text'
                    />
                </div>

            }
        </div>
    );
}

export default RSVP;