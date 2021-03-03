

let initialState = {
    total_price: 0,
    coffees: []
}
let initialStore ={
    count:0
};

let quantity = 0;

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COFFEE':

            // if (CoffeeAction.type === 'ADD_COFFEE'){
            //     // return {count: state.count +1}
            // }

            // if (CoffeeActionREMOVE.type === 'REMOVE_COFFEE'){
            //     return {count: state.count - 1}
            // }

            
            return {
             
                total_price: state.total_price + action.total_price,
                
                coffees: [
                    ...state.coffees,
                    {
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price,
                        quantity: quantity++
                    }
                ]
                
            }
        
        case 'REMOVE_COFFEE':
            return {
                total_price: state.total_price - action.total_price,
                
                /* coffees: [
                    ...state.coffees,
                    state.coffees.filter(coffee => (
                        coffee.id !== action.payload.id))
                ] */
            }
    default:
            return state;
    }
}

export default coffeeReducer

/* case 'UPDATE':

            return {​​

                ...state,

                coffees: coffees.map(coffee => {​​

                    if (coffee.id !== action.payload.id) {​​

                        return coffee;

                    }​​

                    return {​​

                        …coffee,

                        quantity: coffee.quantity + 1

                    }​​

                }​​)

            } */