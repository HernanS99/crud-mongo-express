import about from '../assets/img/about.jpg'

const Aboutus = () => {
    return(
        <section id="about" className="about">
            <div className="container mb-5 pt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={about} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>Nosotros</h3>
                        <p>
                        Tenemos todo dispuesto para entregar una experiencia única.
                        </p>
                        <ul>
                            <p><i className="fa-solid fa-check-double"></i>Contamos con componentes de todo tipo para el armado de computadores, desde tarjetas gráficas hasta fuentes de poder.</p>
                            <p><i className="fa-solid fa-check-double"/> Contamos con una amplia variedad de marcas de tope de gama.</p>
                        </ul>
                        <div className="row icon-boxes">
                            <div className="col-md-6">
                                <h4>Calidad</h4>
                                <p>Contamos con un equipo profesional que se encarga del perfecto funcionamiento de cada componente.</p>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <h4>Tiempo de entrega</h4>
                                <p>Tenemos el promedio de tiempo de entrega más rapido de la región.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Aboutus  