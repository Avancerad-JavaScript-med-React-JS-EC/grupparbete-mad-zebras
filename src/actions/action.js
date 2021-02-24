const showCoffeeAction = (coffee) => {
    return {
        type: 'SHOW_COFFEE',
        payload: coffee
    }
}

export default showCoffeeAction