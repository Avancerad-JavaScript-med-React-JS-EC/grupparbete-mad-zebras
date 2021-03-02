import React, { useState, useEffect } from 'react';
import CoffeeItem from './coffeeItem';
import style from './menu.module.css';
import {useHistory} from 'react-router-dom'; 
import imgUrlb from '../../assets/graphics/bag.svg';
import imgURLn from '../../assets/graphics/navicon.svg'; 
import imgUrlh from'../../assets/graphics/graphics-header.svg';



function Menu() {
    const history = useHistory(); 
    
    const [coffees, setCoffees] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/beans', {method: 'GET'})
        .then(response =>response.json())
        .then (response=>{ setCoffees(response.menu) })
    }, [])


    

    return (
        <section  className={ style.section }>
            <div  className={ style.header} > <img src={imgUrlh }allt='header' />
            <div className={ style.nav}>
            <div className={ style.bag}>
            <img src={imgUrlb} onClick={()=>history.push('/cart')} />
            </div>
            <div className={style.nav } > 
            <img src={imgURLn} allt ='navicon' onClick={()=>history.push('/nav')} />
            </div>
            </div>
    
            </div>
            <h1 className={ style.title }>Meny</h1>
            {coffees.map((coffee) => {
                 return  <CoffeeItem coffee={ coffee } key={ coffee.id }/> 
            })}

            
        </section>
    )
}

export default Menu;