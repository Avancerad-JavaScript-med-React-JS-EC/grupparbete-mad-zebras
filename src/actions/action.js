const CoffeeAction = (coffee) => {
    return {
        type: 'ADD_COFFEE',
        payload: coffee.price
    }
}

export default CoffeeAction