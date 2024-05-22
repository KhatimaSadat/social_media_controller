import { createContext, useState  } from "react";



export const AuthContext = createContext();
export const AuthProvider = ({ children }) =>{
    const [activeButton, setActiveButton] = useState(false);
    return(
        <AuthContext.Provider value={{activeButton , setActiveButton} }>
            {children}
        </AuthContext.Provider>
    )
}