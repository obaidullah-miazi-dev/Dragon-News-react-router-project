import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    // console.log(user);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedUser)=>{
        return updateProfile(auth.currentUser,updatedUser)
    }

    const LogIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
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
        LogOut,
        LogIn,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;