import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducers from "./UserReducer"


const UserProvider = ({children}) => {
    const [userState, dispatch] = useReducer(userReducers,{
        nombre:'juanito'
    })
    return ( 
        <UserContext.Provider value={{userState}}> {children} </UserContext.Provider>
    )
}

export default UserProvider