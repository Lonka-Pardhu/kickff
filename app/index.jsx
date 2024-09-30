import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useRouter } from "expo-router";
import MainSvg from "../assets/svg/MainIcon";
import StatusBarComponent from "../components/customStatusBar";
import { useAuth } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const index = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter(); // Initialize router
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      // Simulate a delay (or perform any async operations)
      await new Promise((resolve) => setTimeout(resolve, 100));
      if (isAuthenticated) {
        router.push("/trends");
      } else {
        router.push("/sign-in");
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
