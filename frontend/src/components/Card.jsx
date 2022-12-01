import nf from '../assets/img/nf.png'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Card = (props) => {
    const context = useContext(CartContext)

    const { brand, inStock, name, price, _id, imgUrl,stock } = props.datos
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      });

    return (
        
            <div className="col-sm-6 col-md-4 col-xl-3 ">
                <Link to={`/products/${(_id)}`} className="style">
                <div className="card-sl mb-5 ">
                    <div className="card-image">
                        <img
                            src={!imgUrl ? nf :  imgUrl} alt='foto' className="img-fluid" />
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
                <div className="card-text fw-bold mb-3 d-grid gap-2">
                        <button className="btn btn-primary" onClick={context.addToCart(_id)} disabled={stock > 0 ? false : true}>Agregar al carro</button>
                </div>
            </div>
    )
}

export default Card