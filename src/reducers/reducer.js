let initialState = {
    coffee: []
}

const coffeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_COFFEE':
            return {
                coffee: action.payload
            }
    
        default:
            return state;
    }
}

export default coffeeReducer