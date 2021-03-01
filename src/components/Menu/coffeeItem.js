import React from 'react';
import { useDispatch } from 'react-redux';
import style from './menu.module.css'

import CoffeeAction from '../../actions/action'

function CoffeeMenu({ coffee }){

    const dispatch = useDispatch();

    function handeClick(){
        dispatch(CoffeeAction(coffee))

    }
    
    return(
        <section 
        className={ style.section } onClick={ handeClick }>
            <h1>{ coffee.title }</h1>
            <p>{ coffee.desc }</p>
            <h2>{ coffee.price } kr</h2>
        </section>
    )
}
export default CoffeeMenu