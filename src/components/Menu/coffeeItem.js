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
        <section  className={ style.section }>
            
            <div className={style.addCoffeInfo}>
            <button  className={ style.btnAdd }onClick={ handeClickAdd }> + </button>
            <div className= {style.coffeOchPrice}>
            <h2 className= {style.coffeTitel} >{ coffee.title }  </h2>
      
            <h2  className= {style.coffeTitel}>{ coffee.price } kr</h2>
            </div>
            </div>
            <p className= {style.subTitel}>{ coffee.desc }</p>

            
            {/* <button className={ style.btnRemove }onClick={ handeClickRemove }>Remove Coffee</button> */}
        </section>
    )
}
export default CoffeeMenu