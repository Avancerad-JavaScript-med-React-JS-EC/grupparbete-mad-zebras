import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import style from './cart.module.css'; 

import { useSelector } from 'react-redux';

import arrowUp from '../../assets/graphics/arrow-up.svg'
import arrowDown from '../../assets/graphics/arrow-down.svg'


import { decreaseCoffee } from '../../actions/action'
import { increaseCoffee } from '../../actions/action'



function Cart({ total_price, coffees }) {
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

            <div className={style.arrow}>
                <i className="fas fa-sort-up"></i>
            </div>

            <div className={style.headTitleContainer}>
                <h1 className={ style.headTitle }>Din beställning</h1>
            </div>

            <div className={style.infoContainer}>

                <div className={style.objects}>
                    <h2 className={style.menuTitle}>ObjectsTitle</h2>
                    <p className={style.menuPrice}>ObjectsPrice kr</p>
                </div>

                <div className={style.arrowsContainer}>
                    <img src={arrowUp} alt='arrowUp' className={style.arrows} />
                    <p>1</p>
                    <img src={arrowDown} alt='arrowDown' className={style.arrows} />
                </div>
            </div>

            <div className={style.totalContainer}>
                <div className={style.total}>
                    <h1 className={ style.totalTitle }>Total .................................{ total_price }</h1>
                    <p>inkl moms + drönarleverans</p>
                </div>
            </div>

            <div className={style.buttonContainer}>
                <button className={ style.takeMyMoney }>Take my money!</button>
            </div>

        </section>
    );
}

function mapStateToProps(store) {
    const { total_price, coffees } = store;
    return { total_price, coffees };
}

export default connect(mapStateToProps)(Cart);