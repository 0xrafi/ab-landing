import React from 'react';

import rsvpPic from '../img/ABRsvpEngagementPic.jpeg';

function RSVP() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // ???
    }

    return (
        <div className='rsvpPage'>
            <img src={rsvpPic} className="normalPic" />

            Please RSVP by [SOME DATE].<br></br>
            <form onSubmit={e => { handleSubmit(e) }}>
                <div>
                    <label>Name *</label>
                    <input
                        name='choreDesc'
                        type='text'
                    />
                </div>
                <br></br>
                <div>
                    <label>Are you attending? *</label>
                    <input
                        name='choreDesc'
                        type='text'
                    />
                </div>
            </form>
        </div>
    );
}

export default RSVP;