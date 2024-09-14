import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import StatusBarComponent from "../../../components/customStatusBar";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import RatingComponent from "../../../components/RatingComponent";
import MadridSvg from "../../../assets/svg/MadridIcon";
import ClockSvg from "../../../assets/svg/ClockIcon";
import images from "../../../constants/images";

const singlebet = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (params) {
      console.log(params);
    }
  }, []);
  return (
    <StatusBarComponent>
      <ScrollView className="bg-white flex-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row items-center p-2"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="font-sfsemibold text-[15px]">Back</Text>
        </TouchableOpacity>
        <View className="px-4 py-2">
          <View className="flex flex-row items-center justify-between">
            <Text className="font-sfsemibold text-[#c0bfbf] text-[8px] font-medium  tracking-wider">
              12 MAR, 4:30 AM
            </Text>
            <RatingComponent rating={4} />
          </View>
          <View className="pr-6 pl-10 py-2">
            <View className="flex flex-row items-center justify-between w-full">
              <View className="w-3/5 flex flex-col gap-y-1 py-2">
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-x-2 ">
                    <BarcelonaSvg />
                    <Text className="font-sfsemibold">Barcelona</Text>
                  </View>
                  <Text className="font-sfsemibold">2</Text>
                </View>
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-row items-center gap-x-2 ">
                    <MadridSvg />
                    <Text className="font-sfsemibold text-[#979797]">
                      Real Madrid
                    </Text>
                  </View>
                  <Text className="font-sfsemibold text-[#979797]">0</Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-center gap-x-1 ">
                <ClockSvg />
                <Text className="font-sfregular font-medium text-[#FFAB2E]">
                  2.54
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default singlebet;
