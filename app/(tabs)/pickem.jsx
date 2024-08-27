import { View, Text, ScrollView, FlatList } from "react-native";
import StatusBarComponent from "../../components/customStatusBar";
import React from "react";
import images from "../../constants/images";

const pickem = () => {
  const carouselData = {
    image: images,
  };
  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <ScrollView className="flex-1 w-full h-full bg-white">
        <View className="border-b border-[#0000004D] p-3">
          <Text className="text-[#1493FF] text-[16px] font-sfregular">
            Pickem
          </Text>
        </View>
        {/* <FlatList /> */}
      </ScrollView>
    </StatusBarComponent>
  );
};

export default pickem;
