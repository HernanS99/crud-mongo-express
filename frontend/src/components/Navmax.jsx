import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
import UserContext from '../context/UserContext'
import hw from '../assets/img/hw.png'

const Navmax = () => {
    const context = useContext(UserContext)
    const cartContext = useContext(CartContext)
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
                    <img className="navbar-brand" src={hw} width="50" height="54" alt="" />Hardware.exe
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
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Usuario</a>
                                    <ul className="dropdown-menu">
                                        <Link to='/login' className="dropdown-item nav-link">
                                            Iniciar sesión
                                        </Link>
                                        <Link to='/register' className="dropdown-item nav-link">
                                            Registrarse
                                        </Link>
                                    </ul>
                                </li>
                            }
                            {token &&
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">Usuario</a>
                                    <ul className="dropdown-menu">
                                        <Link to='/User' className="dropdown-item nav-link">
                                            Mi cuenta
                                        </Link>
                                        {context.userState.user?.isAdmin &&
                                        <Link to='/admin' className="dropdown-item nav-link">
                                            Pagina de Admin
                                        </Link>
                                        }
                                        <button onClick={logout} className="dropdown-item nav-link">
                                            Cerrar sesión
                                        </button>
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                    <Link to='/cart' className='style'>
                    <form className="d-flex ">
                        <button className="btn btn-outline-dark " type="submit">
                        <i className="fa-solid fa-cart-shopping "></i>
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cartContext.cartState.qty}</span>
                        </button>
                    </form> 
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navmax