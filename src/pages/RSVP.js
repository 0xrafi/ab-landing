import React, { useState, useEffect } from 'react';
import RsvpForm from '../components/RsvpForm.tsx';
import rsvpPic from '../img/ABRsvpEngagementPic.jpeg';

const Papa = require("papaparse");

const guestSpreedsheetCsvURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRpdEblJlslYiGTcfGCv4keTIYrHg_aceu_iiPalEfXS9VM_IKiIFPqlUN8YEbYwQkWK5qdP0ZwDqcZ/pub?output=csv";

const parseFile = () => new Promise((resolve) => {
    Papa.parse(guestSpreedsheetCsvURL, {
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
        parseFile().then((response) => {
            setSpreadsheetData(response);
        })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const cleanInputAndCase = str => {
        return str.replace(/\s/g, '').toLowerCase();
    }

    const getGuestFromEmail = email => {
        return spreadsheetData.find(function (row) {
            return cleanInputAndCase(row.Email) === cleanInputAndCase(email);
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
        <>
            <img src={rsvpPic} className="normalPic" />
            Please RSVP by May 13th, 2022.
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
        </>
    );
}

export default RSVP;