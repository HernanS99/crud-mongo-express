import CartContext from "./CartContext"
import { useReducer } from "react"
import cartReducers from "./CartReducer"


const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducers,{cart: null})
       const addToCart = (id) =>{
        console.log(id)
       }
    return (
        <CartContext.Provider value={{cartState, addToCart}}> {children} </CartContext.Provider>
    )
}

export default CartProvider