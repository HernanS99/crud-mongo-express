import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducers from "./UserReducer"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const UserProvider = ({children}) => {
    let response = {}
    const navigate = useNavigate();
    const [userState, dispatch] = useReducer(userReducers,{token: null})

    const getUserInfo = async (token) =>{
        try{
            const respuesta = await axios.get('http://localhost:4000/api/user',{headers:{Authorization:'Bearer '+token}})
            if(respuesta.data.success){
                response = {...respuesta.data}
                dispatch({type: 'GET', payload: respuesta.data.user})
            }
        }catch(e){
            console.log(e)
        }
    }
    
        const createAccount = async (user) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user',user)
                if(respuesta.data.sucess){
                    navigate("/");
                    dispatch({type: 'REGISTER', payload: respuesta.data.token})
                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Registro exitoso',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }else{
                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: 'Ingresar todos los datos correctamente y vuelva a intentar',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }catch(e){
                console.log(e)
            }
        }
        const login = async (user) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user/login',user)
                if(respuesta.data.success){
                    navigate("/");
                    dispatch({type: 'LOGIN', payload: respuesta.data.token})
                    getUserInfo(respuesta.data.token)
                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Inicio de sesión exitoso',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }else{
                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'error',
                        title: 'Inicio de sesión fallido. Por favor ingresar datos correctamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }catch(e){
                console.log(e) 
            }
        }
        const editUser = async (user,token) => {
            try{
                const respuesta = await axios.put('http://localhost:4000/api/user/',user,{headers:{Authorization:'Bearer '+token}})
                if(respuesta.data.success){
                    dispatch({type: 'EDIT'})
                    Swal.fire({
                        position: 'bottom-end',
                        icon: 'success',
                        title: 'Usuario editado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            }catch(e){
                console.log(e)
            }
        }
        
        const validateToken = async (token) =>{
            try{
                const respuesta = await axios.get('http://localhost:4000/api/user/login',{headers:{Authorization:'Bearer '+token}})
                if(respuesta.data.success){
                    dispatch({type: 'LOGIN', payload: token})
                }
            }catch(e){
                console.log(e)
            }
        }

       

        const logout = () => {
            dispatch({type:'LOGOUT'})
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: 'Sesión cerrada exitosamente',
                showConfirmButton: false,
                timer: 1500
              })
        }
    return ( 
        <UserContext.Provider value={{userState, createAccount , login , logout, validateToken,getUserInfo,response,editUser}}> {children} </UserContext.Provider>
    )
}

export default UserProvider