import React, { useState } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const signInResult = () => {
    auth
      .getRedirectResult()
      .then((result) => {
        if (
          result &&
          result.additionalUserInfo &&
          result.additionalUserInfo.profile
        ) {
          setEmail(result.additionalUserInfo.profile.email);
          setName(result.additionalUserInfo.profile.name);
          setPicture(result.additionalUserInfo.profile.picture);
          login(result.credential.idToken);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const login = (token) => {
    setToken(token);
  };
  const loggedIn = token ? true : false;
  const value = {
    loggedIn,
    signInResult,
    email,
    name,
    picture,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
