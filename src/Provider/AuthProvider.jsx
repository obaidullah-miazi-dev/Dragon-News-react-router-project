import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return ()=>{
            unsubscribe()
        }
    }, [])

    const LogOut = () =>{
        return signOut(auth)
    }

    const authData = {
        user,
        setUser,
        createUser,
        LogOut
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;