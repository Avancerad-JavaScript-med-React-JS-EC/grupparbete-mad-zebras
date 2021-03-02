import React from 'react';
import style from './cart.module.css'; 

function Cart() {
    return (
        <section className={style.container}>
            <div className={style.bag}>

            </div>

            <h1 className={style.headTitle}>Din beställning</h1>
            
            <h2></h2>

            <h1 className={style.total}>Total</h1>
            <p className={style.subTotal}>Take my money!</p>
            <button className={style.button}>Take my money!</button>
        </section>
    );
}

export default Cart;