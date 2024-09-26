import { View, Text } from "react-native";
import React from "react";

const ColouredCircle = ({ color }) => {
  return (
    <View
      className="h-[9px] w-[9px] rounded-full"
      style={{ backgroundColor: color }}
    ></View>
  );
};

export default ColouredCircle;
