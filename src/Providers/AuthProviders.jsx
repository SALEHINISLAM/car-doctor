import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDatabase, ref, set } from 'firebase/database';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext=createContext();
const database=getDatabase(app)
const auth = getAuth(app);
const AuthProviders = ({children}) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const createUser=async(email, password, fullName)=>{
        setLoading(true)
        try{
            const userCredential=await createUserWithEmailAndPassword(auth,
                email, 
                password);
                const user=userCredential.user;
                await updateProfile(user, {
                    displayName: fullName,
                });
                await set(ref(database, 'users/'+user.uid), {
                    Name:fullName,
                    email:email,
                });
                setUser(user);
                return userCredential.user;
        }catch(error){
            throw error;
        }
    }

    const userSignIn=async(email, password)=>{
        setLoading(true)
        try{
            const userCredential=await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            setUser(userCredential.user);
            return userCredential
        }catch(error){
            throw error
        }
    }
    const userSignInWithGoogle=async()=>{
        const googleProvider=new GoogleAuthProvider();
        try{
            const response=await signInWithPopup(auth, googleProvider);
            const user=response.user;
            set(ref(database, 'users/'+user.uid),{
                Name:user.displayName,
                email:user.email,
            });
            setUser(user);
            return user;
        }catch(err){
            throw err;
        }
    }
    const userLogOut=async()=>{
        try{
            await signOut(auth);
            setUser(null);
            return;
        }catch(error){
            throw error;
        }
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log('current user',currentUser);
            setLoading(false)
        });
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        userSignIn,
        userSignInWithGoogle,
        userLogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
{
    children
}
        </AuthContext.Provider>
    );
};

AuthProviders.propTypes = {
    children: PropTypes.node.isRequired
};

export default AuthProviders;