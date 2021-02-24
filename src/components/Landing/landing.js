import React from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css';


function Landing() {

    const history = useHistory();

    return (
        <div className='container'>
            <div className='logo-container'>
                <button className='btn-logo' onClick={ () => history.push(`/nav`) }>A</button>
            </div>

            <div>
                <h2 className='title'>AIR BEAN</h2>
                <p>DRONEDELIVERED COFFEE</p>
            </div>
        </div>
    );
}

export default Landing;