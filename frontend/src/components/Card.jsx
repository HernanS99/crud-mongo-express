import nf from '../assets/img/nf.png'

const Card = (props) => {
    const { brand, inStock, name, price} = props.datos
    return(
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        <img
                            src={nf} alt='foto' className="img-fluid"/>
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
            </div>
    )
}

export default Card