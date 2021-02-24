import React from 'react';
import { useHistory } from 'react-router-dom';
import './nav.css'

function Nav() {

    const history = useHistory();

    return (
        <div className='nav-container'>
            <div className='nav-btn-container'>
                <button className='nav-btn' onClick={ () => history.push(`/menu`) }>✕</button>
            </div>

            <div className='menu-list'>
                <h2 className='list-title' onClick={ () => history.push(`/menu`) }>Meny</h2>
                <hr className="center-line"></hr>
                <h2 className='list-title' onClick={ () => history.push(`/about`) }>Vårt Kaffe</h2>
                <hr className="center-line"></hr>
            </div>
        </div>
    );
}

export default Nav;