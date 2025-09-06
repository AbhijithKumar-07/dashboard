import React, { createContext, useContext, useState } from "react";
import { auth } from "../auth";
import { signOut } from "firebase/auth";

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

 const login = (idToken, userRole) => {
  if (idToken) {
    localStorage.setItem("token", idToken);
    localStorage.setItem("role", userRole);
  } else {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }
  setToken(idToken);
  setRole(userRole);
};


  const logout = async () => {
    await signOut(auth); // 🔥 sign out from Firebase
    setToken(null);
    setRole(null);
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  return (
    <RoleContext.Provider value={{ token, role, login, logout }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
