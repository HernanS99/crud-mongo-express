import CartContext from "./CartContext"
import { useReducer } from "react"
import cartReducers from "./CartReducer"


const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducers,{cart: []})
       const addToCart = (id) =>{
        dispatch({type: 'ADD', payload : id})
       }
    return (
        <CartContext.Provider value={{cartState, addToCart}}> {children} </CartContext.Provider>
    )
}

export default CartProvider