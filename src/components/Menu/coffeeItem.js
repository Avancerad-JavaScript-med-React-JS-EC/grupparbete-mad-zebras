import React from 'react';
import { useDispatch } from 'react-redux';
import style from './menu.module.css'

import CoffeeAction from '../../actions/action'
import { CoffeeActionREMOVE } from '../../actions/action'

function CoffeeMenu({ coffee }){

    
    const dispatch = useDispatch();

    function handeClickAdd(){
        dispatch(CoffeeAction(coffee))
    }

    function handeClickRemove(){
        dispatch(CoffeeActionREMOVE(coffee))
    }
    
    
    return(
        <section className={ style.section }>
            
            <h2>{ coffee.title }</h2>
            <p>{ coffee.desc }</p>
            <h1>{ coffee.price } kr</h1>
            <button onClick={ handeClickAdd }>Add Coffee</button>
            <button onClick={ handeClickRemove }>Remove Coffee</button>
        </section>
    )
}
export default CoffeeMenu