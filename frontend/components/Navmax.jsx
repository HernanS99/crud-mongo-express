const Navmax = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <img className="navbar-brand" src="" width="80" height="54" alt="" />Restorant Comida Japonesa
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            {/* {user === null ?
                                null
                                :
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/AdminPage">Administracion</NavLink>
                                </li>
                            }
                            {user === null ?
                                <li className="nav-item">
                                    <button type="button" className="btn btn-dark"><NavLink className="text-secondary" to="/Login">Administracion</NavLink> </button>
                                </li>
                                :
                                <li className="nav-item">
                                    <button type="button" className="btn btn-dark" onClick={() => signOutUser()}>Cerrar Sesion</button>
                                </li>
                            } */}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navmax