const Product = () =>{
    return(
        <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="card-sl mb-5">
                    <div className="card-image">
                        {/* <img
                            src={img === null ? nf : img} alt='foto' className="img-fluid"/> */}
                    </div>
                    <div className="card-heading">
                        Nombre
                    </div>
                    <div className="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quidem voluptatibus. Delectus pariatur reprehenderit in minus aut ex, accusantium earum nesciunt iste neque debitis libero aliquam suscipit quas ipsam numquam.
                    </div>
                    <div className="card-text fw-bold">
                        $30.000
                    </div>
                </div>
            </div>
    )
}

export default Product