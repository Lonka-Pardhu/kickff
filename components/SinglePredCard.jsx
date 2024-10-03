import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import images from "../constants/images";
import RatingComponent from "./RatingComponent";
import MadridSvg from "../assets/svg/MadridIcon";
import ClockSvg from "../assets/svg/ClockIcon";
import LightBulbSvg from "../assets/svg/LightBulbIcon";
import ArrowRightSvg from "../assets/svg/ArrowRightIcon";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import BarcelonaSvg from "../assets/svg/BarcelonaIcon";

const SinglePredCard = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/pickem/singlebet`,
          params: { id: 1 },
        })
      }
      style={styles.cardShadow}
      className="w-full rounded-lg bg-white py-4 pr-4 pl-1 shadow-md md-2"
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center">
            <View className="h-1 w-1 rounded-full bg-[#EF3E3A]"></View>
            <Image source={images.LeagueImg1} className="h-[40px] w-[40px]" />
          </View>
          <View className="flex flex-col">
            <Text className="font-sfsemibold">SerieA</Text>
            <View className="flex items-center flex-row gap-x-1">
              <Text className="font-sfsemibold text-[8px] font-medium  tracking-widest">
                12 MAR
              </Text>
              <View className="h-1 w-1 bg-black rounded-full"></View>
              <Text className="font-sfsemibold text-[8px] tracking-widest font-medium">
                4:30AM
              </Text>
            </View>
          </View>
        </View>
        <RatingComponent rating={4} />
      </View>
      <View className="pr-6 pl-10 py-2">
        <View className="flex flex-row items-center justify-between w-full">
          <View className="w-3/5 flex flex-col gap-y-2 py-2">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-2 ">
                <BarcelonaSvg />
                <Text className="font-sfsemibold">Barcelona</Text>
              </View>
              {/* <Text className="font-sfsemibold">2</Text> */}
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-2 ">
                <MadridSvg />
                <Text className="font-sfsemibold text-[#979797]">
                  Real Madrid
                </Text>
              </View>
              {/* <Text className="font-sfsemibold text-[#979797]">0</Text> */}
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
      <View className="px-4 w-full flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-2 w-[85%]">
          <LightBulbSvg />
          <Text
            numberOfLines={2}
            className="font-sfregular font-medium text-[#838E94] text-[12px]"
          >
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy Text
            Ever Since The 1500S, When An Unknown Printer Took A Galley Of Type
            And Scrambled It To Make A Type Specimen Book.
          </Text>
        </View>
        <ArrowRightSvg />
      </View>
    </TouchableOpacity>
  );
};

export default SinglePredCard;

const styles = StyleSheet.create({
  cardShadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
