 

const CoffeeAction = (coffee) => {
    return {
        type: 'ADD_COFFEE',
        total_price: coffee.price,
        payload: coffee
    }
}

export const CoffeeActionREMOVE = (coffee) => {
    return {
        type: 'REMOVE_COFFEE',
        total_price: coffee.price,
        payload: coffee
    }
}

export default CoffeeAction