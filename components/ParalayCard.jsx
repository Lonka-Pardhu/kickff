import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import ParalaySvg from "../assets/svg/ParalayIcon";
import RatingComponent from "./RatingComponent";

import { useRouter } from "expo-router";
import CheckCircleSvg from "../assets/svg/CheckCircleIcon";
import RoundCircleSvg from "../assets/svg/RoundCircleIcon";
import StarSvg from "../assets/svg/StarIcon";

import ArrowRightSvg from "../assets/svg/ArrowRightIcon";

const ParalayCard = ({ data }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/pickem/paralay`,
          params: { id: 1 },
        })
      }
      style={styles.cardShadow}
      className="w-full rounded-lg bg-white py-4 px-4 shadow-md mb-2"
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center gap-x-1">
            <ParalaySvg />
            <Text className="font-sfregular text-[8px] text-[#b7b7b7] tracking-widest">
              12 MAR 4:30 AM
            </Text>
          </View>
        </View>
        <RatingComponent rating={5} />
      </View>
      <View className="flex flex-row items-center px-6 py-6 justify-between">
        <View className="w-[60%]">
          <Text className="font-sfsemibold text-[8px] text-[#838E94] leading-4">
            Both Teams To Score | Over 2.5 Total Goals | Over 9.5 Corners |
            Barcelona Full Time Result | Over 4.5 Total Cards
          </Text>
        </View>
        <View className="flex flex-row items-center justify-center gap-x-1 ">
          <CheckCircleSvg />
          <Text className="font-sfregular font-medium text-[#FFAB2E]">
            2.54
          </Text>
        </View>
      </View>
      <View className="px-4 w-full flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-[6px] ml-2">
          <RoundCircleSvg />
          <StarSvg />
          <RoundCircleSvg />
          <RoundCircleSvg />
          <StarSvg />
        </View>
        <ArrowRightSvg />
      </View>
    </TouchableOpacity>
  );
};

export default ParalayCard;

const styles = StyleSheet.create({
  cardShadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
