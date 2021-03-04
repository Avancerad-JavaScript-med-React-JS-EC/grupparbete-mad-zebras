import React from 'react';
import { useHistory } from 'react-router-dom';


import { connect } from 'react-redux'

import CartItem from './cartItem'
import style from './cart.module.css'; 




function Cart({ total_price, coffees }) {
 
    const history = useHistory();


    return (
        <section className={style.container}>

            <div className={style.arrow}>
                <i className="fas fa-sort-up"></i>
            </div>

            <div className={style.headTitleContainer}>
                <h1 className={ style.headTitle }>Din beställning</h1>
            </div>

            <div className={style.infoContainer}>

                {coffees.map((coffee) => {
                    return  <CartItem coffee={ coffee } key={ coffee.id }/>
                            })}

            </div>

            <div className={style.totalContainer}>
                <div className={style.total}>

                    <h1 className={ style.totalTitle }>Total ...........................{ total_price }</h1>
                    <p>inkl moms + drönarleverans</p>
                </div>
            </div>

            <div className={style.buttonContainer}>
                <button onClick={()=>history.push('/status')} className={ style.takeMyMoney }>Take my money!</button>
            </div>
  
        </section>
    );
}

function mapStateToProps(store) {
    const { total_price, coffees } = store;
    return { total_price, coffees };
}

export default connect(mapStateToProps)(Cart);