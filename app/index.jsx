import { Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <Redirect href="/pickem" />
    // <View className="flex-1 items-center justify-center">
    //   <Text>index</Text>
    // </View>
  );
};

export default index;
