import nf from '../assets/img/404.webp'

const NotFound = () => {
    return(
        <div className='container'>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center row">
                    <div className=" col-md-6">
                        <img src={nf} alt=""
                            className="img-fluid"/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Error</span> Página no encontrada.</p>
                        <p className="lead">
                            La página que buscas no existe
                        </p>
                        <a href="/" className="btn btn-primary">Ir a inicio</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NotFound