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
         
            <div className={ style.info} >
            <button  className={ style.btnAdd }onClick={ handeClickAdd }> + </button>

           <div className={ style.coffePrice}>
            <h2 className= {style.coffeTitel} >{ coffee.title } </h2>
            <h2>{ coffee.price } kr </h2>
            </div>
            
            </div>
            <p className={ style.coffeInfo} >{ coffee.desc }</p> 
            
           
            {/* <button className={ style.btnRemove }onClick={ handeClickRemove }>Remove Coffee</button> */}
        </section>
    )
}
export default CoffeeMenu