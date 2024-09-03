import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const StatusBarComponent = ({ children, barStyle, barBackgroundColor }) => {
  return (
    <SafeAreaView
      edges={["right", "top", "left"]}
      style={[
        {
          flex: 1,
          backgroundColor: { barBackgroundColor },
        },
      ]}
    >
      <StatusBar
        barStyle={barStyle}
        animated={true}
        backgroundColor={barBackgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default StatusBarComponent;
