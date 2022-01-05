import React from 'react';

function RSVP() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // ???
    }

    return (
        <div className='PageContent'>

            <div className='rsvpPage'>
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

        </div>
    );
}

export default RSVP;