import { NavLink, Link } from 'react-router-dom'


const Navmax = () => {

    const navItems = [
        { text: 'Inicio', path: '/' },
        { text: 'Productos', path: '/productos' },
        { text: 'Iniciar Sesion', path: '/login' },
        { text: 'Registrarse', path: '/register' }
    ]
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <img className="navbar-brand" src="https://findicons.com/files/icons/1580/devine_icons_part_2/512/device_and_hardware.png" width="50" height="54" alt="" />hardware.exe
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll ">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <Link to={item.path} className="nav-link">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                    <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                    <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navmax