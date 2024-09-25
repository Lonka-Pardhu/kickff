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
import SpeedometerSvg from "../../../assets/svg/SpeedometerIcon";
import DraggableFlatList from "react-native-draggable-flatlist";
import { PaperProvider, ProgressBar, MD3Colors } from "react-native-paper";

const singlebet = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [activeCategory, setActiveCategory] = useState("meter");

  useEffect(() => {
    if (params) {
      console.log(params);
    }
  }, []);

  return (
    <PaperProvider>
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
            <View>
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
              <View className={`flex flex-row items-center gap-x-4 py-2`}>
                <TouchableOpacity onPress={() => setActiveCategory("insights")}>
                  <Text
                    className={` text-[13px] ${
                      activeCategory === "insights"
                        ? "text-[#0A80FB] font-sfsemibold"
                        : "text-[#AEAEAF] font-sfregular"
                    }`}
                  >
                    Insights
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveCategory("meter")}>
                  <Text
                    className={` text-[13px] ${
                      activeCategory === "meter"
                        ? "text-[#0A80FB] font-sfsemibold"
                        : "text-[#AEAEAF] font-sfregular"
                    }`}
                  >
                    Meter
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="px-8">
            {activeCategory === "insights" ? (
              <View className="flex flex-row items-center gap-x-2 w-full">
                <LightBulbSvg />
                <Text
                  numberOfLines={2}
                  className="font-sfregular font-medium text-[#838E94] text-[12px]"
                >
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And
                  Typesetting Industry. Lorem Ipsum Has Been The Industry’s
                  Standard Dummy Text Ever Since The 1500S, When An Unknown
                  Printer Took A Galley Of Type And Scrambled It To Make A Type
                  Specimen Book.
                </Text>
              </View>
            ) : (
              <View>
                <View className="flex items-center justify-center flex-col">
                  <SpeedometerSvg />
                  <Text className="text-[#0A80FB] font-sfregular text-[15px] tracking-tighter">
                    Game<Text className="font-sfbold"> Meter</Text>
                  </Text>
                  <Text className="text-[10px] text-[#AEAEAF] text-center">
                    According to kickff power index.
                  </Text>
                </View>
                <View className="flex flex-col gap-y-2 mt-4 w-full px-4">
                  <View className="flex flex-row gap-x-2 w-full items-center">
                    <View>
                      <BarcelonaSvg />
                    </View>
                    <View className="w-4/5">
                      <ProgressBar
                        progress={0.8}
                        theme={{ colors: { primary: "#203B71" } }}
                        className="h-[10px] w-full"
                      />
                    </View>
                    <Text className="text-[#B1BBC1] font-sfregular">65%</Text>
                  </View>
                  <View className="flex flex-row gap-x-2 w-full items-center">
                    <View>
                      <MadridSvg />
                    </View>
                    <View className="w-4/5">
                      <ProgressBar
                        progress={0.4}
                        theme={{ colors: { primary: "#203B71" } }}
                        className="h-[10px] w-full"
                      />
                    </View>
                    <Text className="text-[#B1BBC1] font-sfregular">65%</Text>
                  </View>
                  <View className="flex flex-row gap-x-2 w-full items-center">
                    <View>
                      <BarcelonaSvg />
                    </View>
                    <View className="w-4/5">
                      <ProgressBar
                        progress={0.1}
                        theme={{ colors: { primary: "#203B71" } }}
                        className="h-[10px] w-full"
                      />
                    </View>
                    <Text className="text-[#B1BBC1] font-sfregular">65%</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </StatusBarComponent>
    </PaperProvider>
  );
};

export default singlebet;
