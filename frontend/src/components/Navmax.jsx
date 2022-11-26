import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import UserContext from '../context/UserContext'


const Navmax = () => {
    const context = useContext(UserContext)
    const token = context.userState.token
    const [userr, setUserr] = useState({...context.userState.user})
    const navItemsBasic = [
        { text: 'Inicio', path: '/' },
        { text: 'Productos', path: '/products' }
    ]

    const logout = () => {
        context.logout()
    }

    useEffect(()=>{
    },[])
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
                            {navItemsBasic.map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <Link to={item.path} className="nav-link">
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            {!token &&
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Usuario</a>
                                    <ul class="dropdown-menu">
                                        <Link to='/login' className="dropdown-item nav-link">
                                            Iniciar Sesion
                                        </Link>
                                        <Link to='/register' className="dropdown-item nav-link">
                                            Registrarse
                                        </Link>
                                    </ul>
                                </li>
                            }
                            {token &&
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Usuario</a>
                                    <ul class="dropdown-menu">
                                        <Link to='/User' className="dropdown-item nav-link">
                                            Mi cuenta
                                        </Link>
                                        {userr.isAdmin &&
                                        <Link to='/admin' className="dropdown-item nav-link">
                                            Pagina de Admin
                                        </Link>
                                        }
                                        <button onClick={logout} className="dropdown-item nav-link">
                                            Cerrar Sesion
                                        </button>
                                    </ul>
                                </li>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navmax