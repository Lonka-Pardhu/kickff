import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import UpArrowSvg from "../../assets/svg/UpArrowIcon";
import images from "../../constants/images";
import StatusBarComponent from "../../components/customStatusBar";
import SportsCategory from "../../components/SportsCategory";

const livescore = () => {
  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <ScrollView className="flex-1 bg-white">
        <View className="border-b-[0.5px] border-[#0000004D] p-3">
          <Text className="text-[16px] text-center font-sfsemibold">
            Live Score
          </Text>
        </View>
        <View className="p-3">
          <SportsCategory />
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default livescore;
