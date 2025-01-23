import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser)
            setUser(currentUser);

        })

        //Component UnMount // this is a clean up function
        return () => {
            unSubscribe();
        }

    }, [])


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;