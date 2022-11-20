const Register = () => {
    return(
<section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white">
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Registrarse</h2>
                                    <p className="text-white-50 mb-5">Ingrese los datos solicitados en la parte inferior</p>

                                    <div className="form-outline form-white mb-4">
                                        <input type="text" id="typeEmailX" name="name" className="form-control form-control-lg"
                                            onChange={(evento) => handleInput(evento)}
                                        />
                                        <label className="form-label" >Nombre</label>
                                    </div>
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="typeEmailX" name="email" className="form-control form-control-lg"
                                            onChange={(evento) => handleInput(evento)}
                                        />
                                        <label className="form-label" >Email</label>
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <input type="password" id="typePasswordX" name="password" className="form-control form-control-lg" onChange={(evento) => handleInput(evento)} />
                                        <label className="form-label">Contraseña</label>
                                    </div>

                                    <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={register}>Login</button>

                                </div>

                                <div>
                                    <p className="mb-0">ya tienes una cuenta? <a href="./Login" className="text-white-50 fw-bold">Inicia sesion</a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register