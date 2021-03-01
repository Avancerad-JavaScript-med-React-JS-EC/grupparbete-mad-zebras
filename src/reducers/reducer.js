

let initialState = {
    price: 0,
    types_of_coffee: [
        {
            one_coffee: {
                id: null,
                title: '',
                price: 0
            }
        }
    ],
    
}

let order; 


const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COFFEE_TOTAL':
            console.log(state.types_of_coffee)
            console.log(state.type_of_coffee.length)
            
            if (state.types_of_coffee.length > 0   )   {

                return {types_of_coffee:{id:'hej'}}
                 
            } 
            else  {

                    
            return {
                price: state.price + action.total_price,
                types_of_coffee: {
                    id: action.type_of_coffee.id,
                    title: action.type_of_coffee.title,
                    price: action.type_of_coffee.price
                }
            }
        }
    default:
            return state;
    }
}

export default coffeeReducer