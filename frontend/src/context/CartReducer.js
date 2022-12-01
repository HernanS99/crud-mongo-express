const CartReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'ADD':
            return {token: payload }
        default:
            return state
    }
}

export default CartReducers