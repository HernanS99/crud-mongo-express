import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducers from "./UserReducer"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const UserProvider = ({children}) => {
    const navigate = useNavigate();
    const [userState, dispatch] = useReducer(userReducers,{token: null})
        const createAccount = async (user) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user',user)
                console.log(respuesta)
                if(respuesta.data.sucess){
                    navigate("/");
                    dispatch({type: 'REGISTER', payload: respuesta.data.token})
                    
                }
            }catch(e){
                console.log(e)
            }
        }
        const login = async (user) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user/login',user)
                console.log(respuesta)
                if(respuesta.data.success){
                    navigate("/");
                    dispatch({type: 'LOGIN', payload: respuesta.data.token})
                }
            }catch(e){
                console.log(e)
            }
        }
        const editUser = async (user) => {
            try{
                const respuesta = await axios.post('http://localhost:4000/api/user/',user)
                console.log(respuesta)
                if(respuesta.data.success){
                    navigate("/");
                    dispatch({type: 'LOGIN', payload: respuesta.data.token})
                }
            }catch(e){
                console.log(e)
            }
        }
        
        const validateToken = async (token) =>{
            try{
                const respuesta = await axios.get('http://localhost:4000/api/user/login',{headers:{Authorization:'Bearer '+token}})
                console.log(respuesta)
                if(respuesta.data.success){
                    navigate("/");
                    dispatch({type: 'LOGIN', payload: token})
                }
            }catch(e){
                console.log(e)
            }
        }

        const getUserInfo = async (token) =>{
            try{
                const respuesta = await axios.get('http://localhost:4000/api/user',{headers:{Authorization:'Bearer '+token}})
                console.log(respuesta.data.user)
                if(respuesta.data.success){
                    dispatch({type: 'GET', payload: token})
                }
            }catch(e){
                console.log(e)
            }
        }

        const logout = () => {
            dispatch({type:'LOGOUT'})
        }
    return ( 
        <UserContext.Provider value={{userState, createAccount , login , logout, validateToken,getUserInfo}}> {children} </UserContext.Provider>
    )
}

export default UserProvider