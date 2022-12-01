import nf from '../assets/img/nf.png'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'

const Card = (item) => {
    const context = useContext(CartContext)
    const [qty, setQty] = useState(1)
    const { brand, inStock, name, price, _id, imgUrl, stock } = item.datos
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    });

    const reducir = () => {
        if (qty >= 2) {
            setQty(qty - 1)
        }
    }

    const aumentar = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }
    return (

        <div className="col-sm-6 col-md-4 col-xl-3 ">
            <Link to={`/products/${(_id)}`} className="style">
                <div className="card-sl mb-5 ">
                    <div className="card-image">
                        <img
                            src={!imgUrl ? nf : imgUrl} alt='foto' className="img-fluid" />
                    </div>
                    <div className="card-heading">
                        {name}
                    </div>
                    <div className="card-text">
                        {brand}
                    </div>
                    <div className="card-text fw-bold">
                        {formatter.format(price)}
                    </div>

                </div>
            </Link>
            {stock ? (
                <div className="d-flex align-items-center qty-container">
                    <button onClick={reducir} disabled={qty === 1}>
                    </button>
                    <span className="my-2 text-center">{qty}</span>
                    <button onClick={aumentar} disabled={qty === stock}>
                    </button>
                </div>
            ) : (
                <div className="d-flex align-items-center qty-container">
                    <p className="text-danger fw-semibold">Sin stock</p>
                </div>
            )}
            <div className="card-text fw-bold mb-3 d-grid gap-2">
                <button className="btn btn-primary" onClick={() => context.addToCart(item, qty)} disabled={stock > 0 ? false : true}>Agregar al carro</button>
            </div>
        </div>
    )
}

export default Card