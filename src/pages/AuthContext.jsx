import React, { createContext, useState } from 'react';
 
export const AuthContext = createContext();
 
export const AuthProvider = ({ children }) => {
  const tokenFromStorage = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(tokenFromStorage);
 
  const login = (token) => {
    localStorage.setItem('token', token);
    setAuthToken(token);
  };
 
  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
  };
 
  return (
<AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
</AuthContext.Provider>
  );
};