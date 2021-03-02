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
          
            <h2 className= {style.coffeTitel} >{ coffee.title } { coffee.price } kr </h2>
            <p>{ coffee.desc }</p>

             <button  className={ style.btnAdd }onClick={ handeClickAdd }>Add Coffee</button>
            <button className={ style.btnRemove }onClick={ handeClickRemove }>Remove Coffee</button>
        </section>
    )
}
export default CoffeeMenu