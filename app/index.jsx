import { Text, View } from "react-native";
import { useState, useEffect } from "react";
import { Redirect, useRouter } from "expo-router";
import MainSvg from "../assets/svg/MainIcon";
import StatusBarComponent from "../components/customStatusBar";
import { useAuth } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter(); // Initialize router
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     setLoading(true);
  //     // Simulate a delay (or perform any async operations)
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     if (isAuthenticated) {
  //       console.log(isAuthenticated);
  //       router.replace("/trends");
  //     } else {
  //       router.replace("/(auth)");
  //     }
  //     setLoading(false);
  //   };

  //   checkAuth();
  // }, [isAuthenticated, router]);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      // Ensure we check the actual stored token, not just isAuthenticated
      const storedToken = await AsyncStorage.getItem("userToken");
      if (storedToken) {
        router.replace("/trends");
      } else {
        router.replace("/(auth)");
      }
      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated, router]);

  if (loading) {
    return <Spinner visible={loading} />;
  }

  return (
    <>
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <View className="flex-1 items-center justify-center bg-[#015AD2]">
          <MainSvg />
        </View>
      </StatusBarComponent>
    </>
  );
};

export default index;
