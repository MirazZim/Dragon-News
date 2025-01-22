import { createContext, useState } from "react";


 export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user , setUser] = useState({
        name: "Miraz",
        email: " Miraz.zim.38@gmail.com"
    });


    const authInfo = {
        user,
        setUser,
    }


    return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;