import React from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { useDispatch } from 'react-redux';

import showCoffeeAction from '../../actions/action'

function CoffeeMenu({ coffee }){

    /* const history = useHistory(); */
    const dispatch = useDispatch();

    function handeClick(){
        dispatch(showCoffeeAction(coffee))
    }
    console.log(coffee)
    return(
        <section onClick={ handeClick }>
            {/* <h1>{ coffee.title }</h1> */}
        </section>
    )
}
export default CoffeeMenu