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
                if(respuesta.data.sucess){
                    navigate("/");
                    dispatch({type: 'LOGIN', payload: respuesta.data.token})
                }
            }catch(e){
                console.log(e)
            }
        }
    return ( 
        <UserContext.Provider value={{userState, createAccount}}> {children} </UserContext.Provider>
    )
}

export default UserProvider