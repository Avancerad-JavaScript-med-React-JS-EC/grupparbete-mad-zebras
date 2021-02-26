let initialState = {
    coffee: []
}

const coffeeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_COFFEE':
            return state + action.payload
         
    default:
            return state;
    }
}

export default coffeeReducer