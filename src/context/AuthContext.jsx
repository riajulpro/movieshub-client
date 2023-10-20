// Importing all the necessary items
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthProvider = createContext();

const AuthContext = ({ children }) => {
  // Setting logged user information in a state
  const [user, setUser] = useState(null);

  // Setting a state for loading
  const [loading, setLoading] = useState(true);

  // Making an observer to the Authentication Changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // Third party provider setup
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Login popup with third party user
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Creating a new account with email and password
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in into the existing account
  const signAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout from the account
  const logoutAccount = () => {
    setLoading(true);
    signOut(auth)
      .then()
      .catch((error) => console.log(error.message));
  };

  // Authentication Information Passing
  const value = {
    user,
    loginWithGoogle,
    loginWithGithub,
    createAccount,
    signAccount,
    logoutAccount,
    loading,
  };

  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
