import React, { useState, useEffect } from 'react';

import CoffeeItem from './coffeeItem';
import style from './menu.module.css'



function Menu() {
    
    const [coffees, setCoffees] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/beans', {method: 'GET'})
        .then(response =>response.json())
        .then (response=>{ setCoffees(response.menu) })
    }, [])

    

    return (
        <section>
            <h1 className={ style.section }>Meny</h1>
            {coffees.map((coffee) => {
                 return  <CoffeeItem coffee={ coffee } key={ coffee.id }/> 
            })}
        </section>
    )
}

export default Menu;