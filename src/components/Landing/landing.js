import React from 'react';
import { useHistory } from 'react-router-dom';
import './landing.css';
import logo from '../../assets/graphics/airbean-landing.svg'
import footer from '../../assets/graphics/graphics-footer.svg'
import header from '../../assets/graphics/graphics-header.svg'
import left from '../../assets/graphics/intro-graphic-left.svg'
import right from '../../assets/graphics/intro-graphic-right.svg'

function Landing() {

    const history = useHistory();

    return (
        <div className='landing-container'>
            <div className='logo-container'>
                <img src={logo} onClick={ () => history.push(`/nav`) } className='logo' alt='logo'/>
            </div>
            <img src={header} className='header' alt='header'/>
            <img src={left} className='left' alt='left'/>
            <img src={right} className='right' alt='right'/>
            <img src={footer} className='footer' alt='footer'/>
        </div>
    );
}

export default Landing;