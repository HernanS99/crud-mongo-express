import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducers from "./UserReducer"
import axios from 'axios'

const UserProvider = ({children}) => {
    const [userState, dispatch] = useReducer(userReducers,{token: null})
    try{
        const createAcount = async () => {
            const respuesta = await axios.post('http://localhost:4000/api/usuario',user)
            if(respuesta.data.success){
    
            }
        }
    }catch(e){
        console.log(e)
    }
    
    

    return ( 
        <UserContext.Provider value={{userState}}> {children} </UserContext.Provider>
    )
}

export default UserProvider