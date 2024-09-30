import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the AuthContext
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // Check for token in async storage when the app starts
  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userToken");
        if (storedToken) {
          userToken(storedToken);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log("Failed to load token:", error);
      }
    };

    loadToken();
  }, [userToken, isAuthenticated]);

  // Login function
  const setTokenInAsync = async (userToken) => {
    try {
      await AsyncStorage.setItem("userToken", userToken);
      setUserToken(userToken);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Error saving token:", error);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setUserToken(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.log("Error removing token:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userToken, setTokenInAsync, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
