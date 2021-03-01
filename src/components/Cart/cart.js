import React from 'react';

function Cart() {
    return (
        <section className={style.container}>
<div className={style.bag}>

</div>

            <h1 className={style.headTitle}>Din beställning</h1>
            
            <h2></h2>

            <h1 className={style.total}>Total</h1>
            <p className={subTotal}>Take my money!</p>
            <button className={style.button}>Take my money!</button>
        </section>
    );
}

export default Cart;