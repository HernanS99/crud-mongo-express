const CartReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REGISTER':
            return { ...state,token: payload }
        default:
            return state
    }
}

export default CartReducers