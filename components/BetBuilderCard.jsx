import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import BetbuilderSvg from "../assets/svg/BetBuilderIcon";
import RatingComponent from "./RatingComponent";
import BarcelonaSvg from "../assets/svg/BarcelonaIcon";
import MadridSvg from "../assets/svg/MadridIcon";
import { useRouter } from "expo-router";
import CheckCircleSvg from "../assets/svg/CheckCircleIcon";
import RoundCircleSvg from "../assets/svg/RoundCircleIcon";
import StarSvg from "../assets/svg/StarIcon";
import ArrowRightSvg from "../assets/svg/ArrowRightIcon";

const BetBuilderCard = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/pickem/betbuilder`,
          params: { id: 1 },
        })
      }
      style={styles.cardShadow}
      className="w-full rounded-lg bg-white py-4 px-4 shadow-md"
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center gap-x-1">
            <BetbuilderSvg />
            <Text className="font-sfregular text-[8px] text-[#b7b7b7] tracking-widest">
              12 MAR 4:30 AM
            </Text>
          </View>
        </View>
        <RatingComponent rating={5} />
      </View>
      <View className="flex flex-row items-center pr-6 py-3 justify-between">
        <View className="flex flex-row items-center gap-x-3">
          <View className="flex flex-row gap-x-1">
            <BarcelonaSvg />
            <MadridSvg />
          </View>
          <View className="flex flex-col">
            <Text className="font-sfsemibold">Barcelona</Text>
            <Text className="font-sfsemibold">Real Madrid</Text>
          </View>
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

export default BetBuilderCard;

const styles = StyleSheet.create({
  cardShadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
