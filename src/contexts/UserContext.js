import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const UserContext = createContext();

// Custom hook to use UserContext
export const useUser = () => {
  return useContext(UserContext);
};

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);

  // Fetch user data from the backend
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.data);
        // setAddress(data.data); 
      } else {
        console.error('Failed to fetch user data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch address separately if needed
  const fetchUserAddress = async () => {
    if (address) return address; // Return cached address if available

    try {
      const response = await fetch(`${process.env.REACT_APP_BASEURL}/api/v1/user/getAddress`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('address: ', data);
        setAddress(data.address);
        return data.address;
      } else {
        console.error('Failed to fetch address:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      return null;
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch user data on component mount
  }, []);

  // Context value
  const value = {
    user,
    address,
    setUser,
    fetchUserAddress
    };

  return <UserContext.Provider value={value}> {children}  </UserContext.Provider>;
};
