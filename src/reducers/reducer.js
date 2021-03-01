

let initialState = {
    total_price: 0,
    coffees: []
}

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
                        price: action.payload.price
                    }
                ]
            }
        case 'REMOVE_COFFEE' :
            return {
                total_price: state.total_price - action.total_price,

                coffees: [
                    ...state.coffees,

                    state.coffees.filter(coffee => (
                        coffee.id !== action.payload.id))
                    /* {
                        id: action.payload.id,
                        title: action.payload.title,
                        price: action.payload.price
                    } */
                ]
            }
    default:
            return state;
    }
}

export default coffeeReducer