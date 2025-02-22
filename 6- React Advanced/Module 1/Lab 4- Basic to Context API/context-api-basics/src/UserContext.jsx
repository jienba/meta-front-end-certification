import {createContext, useContext, useState} from "react";

const UserContext = createContext(undefined);
export const useUserContext =() => useContext(UserContext)

export function UserContextProvider({children}) {
    const [user] = useState({
            name: "Jienba",
            email: "jienba@gmail.com",
            dob: "24/12/2009"
        }
    );
    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )


}
