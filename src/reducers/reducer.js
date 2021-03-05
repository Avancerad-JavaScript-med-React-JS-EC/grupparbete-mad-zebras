
let initialState = {
    total_price: 0,
    coffees: []
}



const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {


        case 'ADD_COFFEE':

            return {
                ...state,
                total_price: state.total_price + action.payload.price,
                coffees: [...state.coffees, action.payload]
            }


        case 'INCREASE_COFFEE':

            let cart = state.coffees.map((coffeeItem) => {
                if (coffeeItem.id === action.payload.id) {
                    
                    coffeeItem = { ...coffeeItem, quantity: coffeeItem.quantity + 1, price: action.payload.price + coffeeItem.price }
                    
                }

                return coffeeItem
            })

            return {
                ...state,
                total_price: state.total_price + action.payload.price,
                coffees: cart
            }


        case 'DECREASE_COFFEE':

            let Itemcart = state.coffees.map((coffeeItem) => {
                if (coffeeItem.id === action.payload.id) {
                    coffeeItem = { ...coffeeItem, quantity: coffeeItem.quantity - 1, price: coffeeItem.price - action.payload.price }
                }
                return coffeeItem
            })

            return {
                ...state,
                total_price: state.total_price - action.payload.price,
                coffees: Itemcart
            }




        case 'Clear_COFFEE':

            return {
                ...state,
                coffees: []
            }

        default:
            return state;
    }
}

export default coffeeReducer;