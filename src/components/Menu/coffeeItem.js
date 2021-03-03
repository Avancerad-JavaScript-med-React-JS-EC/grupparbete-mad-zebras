import React from 'react';
import { useDispatch } from 'react-redux';
import style from './menu.module.css'

import { addCoffee } from'../../actions/action'


function CoffeeMenu({ coffee }){

    
    const dispatch = useDispatch();

    function handeClickAdd(){
        dispatch(addCoffee(coffee))
    }

    
    
    
    return(
        <section className={ style.section }>
          
            <h2 className= {style.coffeTitel} >{ coffee.title } { coffee.price } kr </h2>
            <p>{ coffee.desc }</p>

            <button onClick={ handeClickAdd }>Add Coffee</button>
        </section>
    )
}
export default CoffeeMenu