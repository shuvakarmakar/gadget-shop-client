import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase-config/firebase";
import axios from "axios";


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const GoogleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                axios.post(`http://localhost:4000/authentication`, {
                    email: currentUser.email
                }).then(data => {
                    if (data.data) {
                        localStorage.setItem('access-token', data?.data?.token);
                        setLoading(false)
                    }
                })
            }
            else {
                localStorage.removeItem('access-token');
                setLoading(false)
            }
        });

        return () => unsubscribe();
    }, []);


    // Object
    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logout,
        GoogleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;