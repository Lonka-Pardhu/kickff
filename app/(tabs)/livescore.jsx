import { View, Text, Image } from "react-native";
import React from "react";
import UpArrowSvg from "../../assets/svg/UpArrowIcon";
import images from "../../constants/images";

const livescore = () => {
  return (
    <View className="mt-2">
      <Image
        source={images.HomeImg1}
        className="w-full h-[210px] rounded-lg my-1"
        resizeMode="cover"
      />
      <View>
        <View className="flex flex-row items-center gap-x-1">
          <UpArrowSvg />
          <Text className="font-sfsemibold text-[#b2b2b2] text-[13px]">
            Lorem Ipsum
          </Text>
        </View>
        <View>
          <Text className="font-sfbold text-[13px] leading-2">
            Lorem Ipsum is simply dummy tex.
          </Text>
          <Text className="text-[#7a7a7a] font-sfregular leading-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
          <Text className="font-sfregular text-[#FF6B6B] text-[13px]">
            4 hours ago
          </Text>
        </View>
      </View>
    </View>
  );
};

export default livescore;
