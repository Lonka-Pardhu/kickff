import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import StatusBarComponent from "../../../components/customStatusBar";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import RatingComponent from "../../../components/RatingComponent";
import MadridSvg from "../../../assets/svg/MadridIcon";
import ClockSvg from "../../../assets/svg/ClockIcon";
import images from "../../../constants/images";
import LightBulbSvg from "../../../assets/svg/LightBulbIcon";

const singlebet = () => {
  const params = useLocalSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

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
        <View className="px-8 py-2">
          <View className="flex flex-row items-center justify-between w-full">
            <Text className="font-sfsemibold text-[#c0bfbf] text-[8px] font-medium  tracking-wider">
              12 MAR, 4:30 AM
            </Text>
            <RatingComponent rating={4} />
          </View>
          <View className="flex flex-row items-center justify-between w-full">
            <View className="flex flex-row items-center justify-center gap-x-1 ">
              <BarcelonaSvg />
              <MadridSvg />
            </View>
            <View className="w-3/5 flex flex-col gap-y-1 py-2">
              <View className="flex flex-row items-center justify-between">
                <Text className="font-sfsemibold">Barcelona</Text>
                <Text className="font-sfsemibold">2</Text>
              </View>
              <View className="flex flex-row items-center justify-between">
                <Text className="font-sfsemibold text-[#979797]">
                  Real Madrid
                </Text>
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
          <View className={`flex flex-row items-center gap-x-2 py-2`}>
            <TouchableOpacity onPress={() => setActiveCategory("all")}>
              <Text
                className={` text-[13px] ${
                  activeCategory === "all"
                    ? "text-[#0A80FB] font-sfsemibold"
                    : "text-[#AEAEAF] font-sfregular"
                }`}
              >
                Insights
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCategory("upcoming")}>
              <Text
                className={` text-[13px] ${
                  activeCategory === "upcoming"
                    ? "text-[#0A80FB] font-sfsemibold"
                    : "text-[#AEAEAF] font-sfregular"
                }`}
              >
                Meter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="px-8">
          <View className="flex flex-row items-center gap-x-2 w-full">
            <LightBulbSvg />
            <Text
              numberOfLines={2}
              className="font-sfregular font-medium text-[#838E94] text-[12px]"
            >
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text
              Ever Since The 1500S, When An Unknown Printer Took A Galley Of
              Type And Scrambled It To Make A Type Specimen Book.
            </Text>
          </View>
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default singlebet;
