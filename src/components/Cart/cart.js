import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import style from './cart.module.css'; 
import { useSelector } from 'react-redux';

import { decreaseCoffee } from '../../actions/action'
import { increaseCoffee } from '../../actions/action'



function Cart({ total_price, coffee }) {
    const menu =  useSelector(state => state.coffeeReducer);
    useEffect(() => {
        console.log(menu)
    }, [menu])

    const dispatch = useDispatch()
    function handeClickDecrease(){
        dispatch(decreaseCoffee())
    }
    function handeClickIncrease(){
        dispatch(increaseCoffee())
    }

    return (
        <section className={style.container}>

            <button>HamburgerMenu</button>
            <button>CartMenu</button>

            <button onClick={ handeClickIncrease }>Increase Coffee</button>
            <button onClick={ handeClickDecrease }>Decrease Coffee</button>
            

            <h1 className={ style.headTitle }>Din beställning</h1>

            <h1 className={ style.total }>Total ............................{ total_price }</h1>
            <button className={ style.takeMyMoney }>Take my money!</button>

        </section>
    );
}

function mapStateToProps(store) {
    const { total_price } = store;
    return { total_price };
}

export default connect(mapStateToProps)(Cart);