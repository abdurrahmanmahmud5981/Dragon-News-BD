import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();






// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
// add new user   
 const createNewUser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }

 // login user
 const loginUser =(email,password)=>{
   setLoading(true);
   return signInWithEmailAndPassword(auth,email,password);
 }

 // log out user
 const logOut = ()=>{
  setLoading(true);  // set loading to true before logging out to prevent loading state when user is logged out.
  return signOut(auth);
 }

 const updateUserProfile = (updatedData)=>{
  return updateProfile(auth.currentUser, updatedData)
 }
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
    loading,
    setLoading,
    updateUserProfile
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setUser(user);
      setLoading(false);
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
