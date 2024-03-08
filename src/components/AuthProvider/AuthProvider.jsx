import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();
    const provider = new GoogleAuthProvider();


    // creating user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // track the user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                axios
                    .post("https://super-shop-server-mu.vercel.app/jwt", {
                        email: currentUser.email,
                    })
                    .then((data) => {
                        localStorage.setItem("access-token", data?.data?.token);
                        setUser(currentUser);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem("access-token");
                setLoading(false)
                setUser(currentUser);
            }
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // log out user
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;