import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { AuthProvider } from "../context/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const queryClient = new QueryClient();
  const [fontsLoaded, error] = useFonts({
    "SF-Pro-Display-Bold": require("../assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Pro-Display-Regular": require("../assets/fonts/SF-Pro-Display-Regular.otf"),
    "SF-Pro-Display-Semibold": require("../assets/fonts/SF-Pro-Display-Semibold.otf"),
    "PlaywriteCU-Regular": require("../assets/fonts/PlaywriteCU-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Stack options={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default RootLayout;
