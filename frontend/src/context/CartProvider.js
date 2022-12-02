import CartContext from "./CartContext"
import { useReducer } from "react"
import cartReducers from "./CartReducer"

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducers, { cart: [], qty: 0 })

  const addToCart = (item, qty) => {
    dispatch({ type: 'ADD', payload: { item, qty } })
  }

  const deleteFromCart = (id) => {
    dispatch({ type: 'DELETE', payload: id })
  }
  const cleanCart = () => {
    dispatch({ type: 'CLEAN' })
  }


  return <CartContext.Provider value={{ cartState, addToCart, deleteFromCart,cleanCart }}>{children}</CartContext.Provider>
}

export default CartProvider