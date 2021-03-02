

let initialState = {
    total_price: 0,
    coffees: []
}

let quantity = 1;

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COFFEE':
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
                
                coffees: state.coffees.map(coffee => {
                    if(coffee.id !== action.payload.id){
                        return coffee;
                    }
                    return{
                        ...state.coffees,
                        quantity: coffee.quantity -1
                    }
                })
            }  

        default:
            return state;            
        }
    }

export default coffeeReducer;