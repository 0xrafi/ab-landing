import React, { useState, useEffect } from 'react';
import RsvpForm from '../components/RsvpForm.tsx';
import rsvpPic from '../img/ABRsvpEngagementPic.jpeg';

const Papa = require("papaparse");

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

    return (
        <div className='rsvpPage'>
            <img src={rsvpPic} className="normalPic" />
            Please RSVP by April 15th, 2022.<br></br><br></br>
            {(password == "ABLA2022" || password == "abla2022") && getGuestFromEmail(email) ?
                <RsvpForm email={email} buildOptions={buildOptions} /> :
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