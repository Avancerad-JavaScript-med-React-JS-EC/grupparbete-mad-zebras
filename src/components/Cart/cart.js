import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import style from './cart.module.css'; 

import { decreaseCoffee } from '../../actions/action'
import { increaseCoffee } from '../../actions/action'

function Cart({ total_price }) {

    /* const dispatch = useDispatch()

    function handeClickDecrease(){
        dispatch(decreaseCoffee(coffee))
    }

    function handeClickIncrease(){
        dispatch(increaseCoffee(coffee))
    } */

    return (
        <section className={style.container}>

            <button>HamburgerMenu</button>
            <button>CartMenu</button>

            <button>Decrease Coffee</button>
            <button>Increase Coffee</button>

            <h1 className={ style.headTitle }>Din beställning</h1>

            <h1 className={ style.total }>Total ............................{ total_price }</h1>
            <button className={ style.takeMyMoney }>Take my money!</button>

        </section>
    );
}

function mapStateToProps(store) {
    const { total_price, coffees } = store;
    return { total_price, coffees };
}

export default connect(mapStateToProps)(Cart);