import { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Create the AuthContext
export const AuthContext = createContext();

// Create a custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");

  // Check for token in async storage when the app starts
  useEffect(() => {
    const loadToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userToken");
        if (storedToken) {
          setUserToken(storedToken);
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
      setUserToken("");
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
