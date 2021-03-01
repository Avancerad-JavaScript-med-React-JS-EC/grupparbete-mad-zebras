const CoffeeAction = (coffee) => {
    return {
        type: 'ADD_COFFEE_TOTAL',
        total_price: coffee.price,
        type_of_coffee: {
            id: coffee.id,
            title: coffee.title,
            price: coffee.price
            
        }
    }
}

export default CoffeeAction