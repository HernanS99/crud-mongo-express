const Card = () => {
    return(
            <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        <img
                            src={img === null ? nf : img} alt='foto' className="img-fluid"/>
                    </div>
                    <div className="card-heading">
                        {nombre}
                    </div>
                    <div className="card-text">
                        {descripcion}
                    </div>
                    <div className="card-text fw-bold">
                        ${precio}
                    </div>
                </div>
            </div>
    )
}

export default Card