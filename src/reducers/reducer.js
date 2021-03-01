

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

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COFFEE_TOTAL':
            return {
                price: state.price + action.total_price,
                type_of_coffee: {
                    id: action.type_of_coffee.id,
                    title: action.type_of_coffee.title,
                    price: action.type_of_coffee.price
                }
            }
         
    default:
            return state;
    }
}

export default coffeeReducer