import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'
import ProductBox from '../components/ProductBox'

const Cart = () => {
    const context = useContext(CartContext)
    const userContext = useContext(UserContext)
  const { qty, cart } = context.cartState

    return (
        <section className="h-100">
            <div className="container h-100 py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-10">

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Carrito de compras</h3>
                        </div>
                        {cart.map((el) => (
                        <ProductBox item={el} key={el._id} />
                         ))}
                        
                        <div className="card">
                            <div className="card-body">
                                <button type="button" className="btn btn-warning btn-block btn-lg">Pagar</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart