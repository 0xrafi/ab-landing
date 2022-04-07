import React, { useEffect } from 'react';
import {loadZolaRegistry} from '../scripts/loadZola'
function Registry() {
    useEffect(() => {
        loadZolaRegistry();
    }, []);

    return (
        <div className='textContent'>
            <a className="zola-registry-embed" href="https://www.zola.com/registry/abinfinity" data-registry-key="abinfinity"/>
        </div>
    );
}

export default Registry;