const Aboutus = () => {
    return(
        <section id="about" className="about">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-lg-6">
                        {/* <img src={Img} className="img-fluid" alt=""/> */}
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>Nosotros</h3>
                        <p>
                        Tenemos todo dispuesto para entregar una experiencia única.
                        </p>
                        <ul>
                            <p><i className="fa-solid fa-check-double"></i>Contamos con expertos en la cocina que te cautivaran con los sabores más tradicionales extradios directamente desde Japon, con el objetivo de brindar, con el objetivo de brindar una experencia satisfactoria todos tus sentidos.</p>
                            <p><i className="fa-solid fa-check-double"/> Contamos con una amplia variedad de comida.</p>
                        </ul>
                        <div className="row icon-boxes">
                            <div className="col-md-6">
                                <h4>Calidad</h4>
                                <p>Contamos con una amplia carta para deleitarse con todos los gustos.</p>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <h4>Tiempo de entrega</h4>
                                <p>Tenemos el promedio de tiempo de entrega más rapido de la region.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Aboutus  