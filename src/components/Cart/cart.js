import React from 'react';
import { useSelector } from 'react-redux'
import style from './cart.module.css'; 
import arrowUp from '../../assets/graphics/arrow-up.svg'
import arrowDown from '../../assets/graphics/arrow-down.svg'

function Cart() {

    const coffee = useSelector((state) => {return state})
    console.log(coffee)

    return (
        <section className={style.container}>
            
            <div className={style.arrow}>
                <i className="fas fa-sort-up"></i>
            </div>

            {/* <button>HamburgerMenu</button>
            <button>CartMenu</button> */}

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
                    <h1 className={ style.totalTitle }>Total ....................</h1>
                    <p>inkl moms + drönarleverans</p>
                </div>

                <div className={style.priceContainer}>
                    <h1>{ coffee.total_price }</h1>
                </div>
            </div>

            <div className={style.buttonContainer}>
                <button className={ style.takeMyMoney }>Take my money!</button>
            </div>

        </section>
    );
}

export default Cart;