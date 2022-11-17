import UserContext from "./UserContext"

const UserProvider = ({children}) => {
    return ( 
        <UserContext.Provider 
            value={{
            nombre:'juanito'
            }}>
            
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider