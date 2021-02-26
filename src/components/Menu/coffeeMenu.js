import React from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { useDispatch } from 'react-redux';

import CoffeeAction from '../../actions/action'

function CoffeeMenu({ coffee }){

    /* const history = useHistory(); */
    const dispatch = useDispatch();

    function handeClick(){
        dispatch(CoffeeAction(coffee))
    }
    console.log(coffee)
    return(
        <section onClick={ handeClick }>
            <h2>{ coffee.title }</h2>
            <p>{ coffee.desc }</p>
            <h1>{ coffee.price } kr</h1>
        </section>
    )
}
export default CoffeeMenu