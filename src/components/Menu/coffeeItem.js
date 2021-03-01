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
        <section className={ style.section } onClick={ handeClick }>
            <h2>{ coffee.title }</h2>
            <p>{ coffee.desc }</p>
            <h1>{ coffee.price } kr</h1>
        </section>
    )
}
export default CoffeeMenu