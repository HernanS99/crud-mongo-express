import React, { useContext } from 'react'
import CartContext from '../context/CartContext'
import UserContext from '../context/UserContext'
import { Link } from 'react-router-dom'
import ProductBox from '../components/ProductBox'
import { PayPalButtons } from "@paypal/react-paypal-js";

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
                        <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart