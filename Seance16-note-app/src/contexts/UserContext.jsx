import { createContext } from "react";



// this is the Consumer in the user context
export const UserContext = createContext() 


// this is the Provider in the user context

const UserProvider = ({children})=> {
    const user = {
        userName : "Rania Manna",
        email : "ahmed@gmail.com",
        role : "admin"
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;