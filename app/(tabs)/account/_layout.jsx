import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AccountLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="personalInfo" options={{ headerShown: false }} />
        <Stack.Screen name="sportsOrder" options={{ headerShown: false }} />
        <Stack.Screen name="password" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" backgroundColor="#ffffff" />
    </>
  );
};

export default AccountLayout;
