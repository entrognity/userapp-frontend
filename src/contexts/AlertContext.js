// src/contexts/AlertContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the context and custom hook
const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ visible: false, message: '', type: '' });

  const showAlert = (message, type = 'error') => {
    setAlert({ visible: true, message, type });
    
    // Automatically hide the alert after a few seconds
    setTimeout(() => {
      setAlert({ visible: false, message: '', type: '' });
    }, 3000); // 3 seconds, adjust as needed
  };

  return (
    <AlertContext.Provider value={{ alert, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
