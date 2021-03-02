import React from 'react';
import { useSelector } from 'react-redux'
import style from './cart.module.css'; 

function Cart() {

    const coffee = useSelector((state) => {return state})
    console.log(coffee)

    return (
        <section className={style.container}>

            <button>HamburgerMenu</button>
            <button>CartMenu</button>

            <h1 className={ style.headTitle }>Din beställning</h1>

            <h1 className={ style.total }>Total ............................{ coffee.total_price }</h1>
            <button className={ style.takeMyMoney }>Take my money!</button>

        </section>
    );
}

export default Cart;