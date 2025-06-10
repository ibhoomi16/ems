import { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import React from 'react';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage with employee and admin data if not already present
    setLocalStorage();

    // Retrieve the data from localStorage
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
