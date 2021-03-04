import React, { useState, useEffect } from 'react';
import CoffeeItem from './coffeeItem';
import style from './menu.module.css';
import {useHistory} from 'react-router-dom'; 
import imgUrlb from '../../assets/graphics/bag.svg';
import imgURLn from '../../assets/graphics/navicon.svg'; 
import imgUrlh from'../../assets/graphics/graphics-header.svg';
import imgurlf from '../../assets/graphics/graphics-footer.svg'



function Menu() {
    
    
    const [coffees, setCoffees] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        fetch('http://localhost:5000/api/beans', {method: 'GET'})
        .then(response =>response.json())
        .then (response=>{ setCoffees(response.menu) })
    }, [])



    
    

    return (

        <div className={style.menuPage}>
       
            <div  className={ style.header} > <img className={ style.imgheader}src={imgUrlh }allt='header' />
           
                
                <div className={style.navicon } > 
                    <img className= {style.imgnavIcon}src={imgURLn} allt ='navicon' onClick={()=>history.push('/nav')} />
                
                </div>


            <div className={ style.bag}>
            <img className= {style.imgBag} src= {imgUrlb} onClick={()=>history.push('/cart')} />
            
            {/* <p className={style.amount}> {count} </p> */}

            </div>

            <div className={style.footer}> <img  src= {imgurlf} /> </div>
            </div>
           

            <h1 className={ style.title }>Meny</h1>
            
            {coffees.map((coffee) => {
                 return  <CoffeeItem coffee={ coffee } key={ coffee.id }/> 
            })}

            
    
        </div>
    )
}

export default Menu;