import React, { useContext, useEffect, useState, createContext } from "react";

import { auth } from "../firebase/fbase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(true);
  // Signs up on firebase with email and password.
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  //user login func
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //user logout
  function logOut() {
    return signOut(auth);
  }

  //google authentication
  async function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        /*Google access token*/
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customDate.email;
        return null;
      });
  }

  // Sets the user to the object and we can keep track if logged in or not.
  // useEffect() lets react know to run after render
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(user));
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser]);
  // Export the value for other functions to call it.
  const value = {
    currentUser,
    signup,
    logIn,
    logOut,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// export function useAuth();
// return useContext();

export const useAuth = () => {
  return useContext(AuthContext);
};
