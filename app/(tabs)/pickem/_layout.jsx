import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const PickemLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="singlebet" options={{ headerShown: false }} />
        <Stack.Screen name="betbuilder" options={{ headerShown: false }} />
        <Stack.Screen name="paralay" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" backgroundColor="#ffffff" />
    </>
  );
};

export default PickemLayout;
