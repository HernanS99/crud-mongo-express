const CartReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD':
            return {cart:state.cart.push({id: payload, qty: 1})}
        default:
            return state
    }
}

export default CartReducers