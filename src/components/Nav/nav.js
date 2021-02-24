import React from 'react';
import { useHistory } from 'react-router-dom';

function Nav() {

    const history = useHistory();

    return (
        <div className='container'>
            <div className='btn-container'>
                <button onClick={ () => history.push(`/`) }></button>
            </div>

            <div className=''>

            </div>
        </div>
    );
}

export default Nav;