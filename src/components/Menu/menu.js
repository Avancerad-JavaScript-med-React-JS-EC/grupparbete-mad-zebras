import React, { useState, useEffect } from 'react';
import menu from '../../assets/data/menu.json';
import CoffeeMenu from './coffeeMenu';



function Menu() {
    
    const [coffees, setCoffees] = useState([]);
    
    useEffect(() => {
        setCoffees(menu);
    }, [])

    console.log(coffees.menu)
    

    return (
        <section>
            
            { coffees.menu.map((coffee) => {
                 return <CoffeeMenu coffee={ coffee }/>
            })}
        </section>
    )
}

export default Menu;