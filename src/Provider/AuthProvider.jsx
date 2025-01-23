import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    


    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogIn = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogIn
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