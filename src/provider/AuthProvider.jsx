import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();






const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
// add new user   
 const createNewUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
 }

 // login user
 const loginUser =(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password);
 }

 // log out user
 const logOut = ()=>{
  return signOut(auth);
 }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
    });
    return ()=>{
        unsubscribe()
    }; // unsubscribe when component unmounts to prevent memory leaks
   
  },[])



  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;