import UserContext from "./UserContext"
import { useReducer } from "react"
import CartReducers from "./UserReducer"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const CartProvider = ({children}) => {
    let response = {}
    const navigate = useNavigate();
    const [CartState, dispatch] = useReducer(CartReducers,{cart: null})
       
    return ( 
        <CartContext.Provider value={{}}> {children} </CartContext.Provider>
    )
}

export default CartProvider