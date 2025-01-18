/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
export const BistroContextApi = createContext();
const BistroContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userSignOut = () => {
    // setLoading(true)
    return signOut(auth);
  };
  const centralData = {
    loading,
    user,
    createUser,
    userSignIn,
    userSignOut,
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        const userInfo = {
          name: user.displayName,
          email: user.email,
        };
        // issue a token
        axiosPublic.post("/jwt",userInfo).then((res) => {
          const token = res?.data?.token;
          localStorage.setItem("access-token", token);
        });
      } else {
        // remove token
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unSubscribe;
    };
  }, [axiosPublic]);
  return (
    <BistroContextApi.Provider value={centralData}>
      {children}
    </BistroContextApi.Provider>
  );
};

export default BistroContext;
