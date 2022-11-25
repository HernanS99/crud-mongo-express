import nf from '../assets/img/nf.png'
import { NavLink, Link } from 'react-router-dom'

const Card = (props) => {
    const { brand, inStock, name, price, _id,desc,imgUrl } = props.datos
    return (
        
            <div className="col-sm-6 col-md-4 col-xl-3">
                <Link to={`/products/${(_id)}`} className="style">
                <div className="card-sl mb-5">
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
                        ${price}
                    </div>
                </div>
                </Link>
            </div>
    )
}

export default Card