const userReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REGISTER':
            return { token: payload }
        case 'LOGIN':
            localStorage.setItem('token', payload);
            return { token: payload }
        case 'LOGOUT':
            localStorage.removeItem('token');
            return { token: null }
        case 'GET':
            return { token: payload }
        default:
            return state
    }
}

export default userReducers