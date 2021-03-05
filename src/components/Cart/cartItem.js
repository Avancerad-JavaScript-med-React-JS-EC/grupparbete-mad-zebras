import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import style from './cart.module.css';
import arrowUp from '../../assets/graphics/arrow-up.svg'
import arrowDown from '../../assets/graphics/arrow-down.svg'
import { decreaseCoffee,increaseCoffee } from '../../actions/action'

function useTotalCoffeePrice(id){
    const {price, quantity} = useSelector(state => state.coffees.find((coffee) => coffee.id === id))
    return price*quantity
}

function CartItem({ coffee }){

    const totalPrice = useTotalCoffeePrice(coffee.id)
    const dispatch = useDispatch()

    function handeClickDecrease(){
        dispatch(decreaseCoffee(coffee))
    }
    function handeClickIncrease(){
        dispatch(increaseCoffee(coffee))
    }

    return(
        <section>

            <h2 className={style.menuTitle}>{ coffee.title}</h2>
            <p className={style.menuPrice}>{ totalPrice } kr</p>

            <div className={style.arrowsContainer}>
                <img src={arrowUp} alt='arrowUp' className={style.arrows} onClick={ handeClickIncrease }/>
                    <p>{ coffee.quantity }</p>
                <img src={arrowDown} alt='arrowDown' className={style.arrows} onClick={ handeClickDecrease }/>
            </div>  

        </section>
    )
}

export default CartItem