import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth"
import { auth } from "../firebase";

const userAuthContext =createContext();
export function UserAuthContextProvider({children}){
    const [user,setUser] =useState("")
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function logIn(email,password){
       
        return signInWithEmailAndPassword(auth,email,password).then(()=>{ setIsLoggedIn(true);})
    }
    function logOut(){
        return signOut(auth).then(()=>{setIsLoggedIn(false) 
            console.log(isLoggedIn);})
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider).then(()=>{ setIsLoggedIn(true);})
      }

    useEffect(()=>{
       const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])


    return <userAuthContext.Provider value={{user,isLoggedIn,signUp,logIn,logOut,googleSignIn}}>{children}</userAuthContext.Provider>
}
export function useUserAuth(){
    return useContext(userAuthContext)
}