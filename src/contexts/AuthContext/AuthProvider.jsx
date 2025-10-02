import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    const createUser = (email, password) =>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect (() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('user in the auth state change', currentUser)
        setLoding(false);
       });

    return () => {
        unSubscribe();
    }
    }, [])

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        logout
    }
    return (
        <AuthContext value={authInfo}>
         {children}
        </AuthContext>
    );
};

export default AuthProvider;