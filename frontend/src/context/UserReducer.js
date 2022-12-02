const userReducers = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'REGISTER':
            return { ...state,token: payload }
        case 'LOGIN':
            localStorage.setItem('token', payload);
            return { ...state,token: payload }
        case 'LOGOUT':
            localStorage.removeItem('token');
            return {
                user:{},
                token: null }
        case 'EDIT':
            return {token: payload }
        case 'GET':
            return {
                ...state,
                user: payload
            }
        default:
            return state
    }
}

export default userReducers