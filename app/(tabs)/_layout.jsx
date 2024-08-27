import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import TrendsSvg from "../../assets/svg/TrendsIcon";
import PickemSvg from "../../assets/svg/PickemIcon";
import LiveScoreSvg from "../../assets/svg/LivescoreIcon";
import AccountSvg from "../../assets/svg/AccountIcon";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarActiveTintColor: "#0A80FB",
        // tabBarInactiveTintColor: "#CDCDE0",
        tabBarLabelStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="trends"
        options={{
          headerShown: false,
          title: "Trends",
          tabBarIcon: ({ focused, color, size }) => (
            <TrendsSvg focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pickem"
        options={{
          headerShown: false,
          title: "Pick'em",
          tabBarIcon: ({ focused, color, size }) => (
            <PickemSvg focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="livescore"
        options={{
          headerShown: false,
          title: "LiveScore",
          tabBarIcon: ({ focused, color, size }) => (
            <LiveScoreSvg focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <AccountSvg focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
