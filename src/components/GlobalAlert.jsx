// src/components/GlobalAlert.js

import React from 'react';
import { useAlert } from '../contexts/AlertContext';

const GlobalAlert = () => {
  const { alert } = useAlert();

  if (!alert.visible) return null;

  return (
    <div
    className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 md:p-6 max-w-xs sm:max-w-sm w-full sm:w-auto rounded shadow-lg text-white ${
        alert.type === 'error' ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      {alert.message}
    </div>
  );
};

export default GlobalAlert;
