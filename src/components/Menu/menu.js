import React, { useState, useEffect } from 'react';
import menu from '../../assets/data/menu.json';
import CoffeeMenu from './coffeeMenu';



function Menu() {
    
    const [coffees, setCoffees] = useState([]);
    
    useEffect(() => {
        setCoffees(menu.menu);
    }, []);

    console.log(coffees)
    

    return (
        <section>
            
            {coffees.map((coffee) => {
                 return  <CoffeeMenu coffee={ coffee } key={ coffee.id }/> 
            })}
        </section>
    )
}

export default Menu;