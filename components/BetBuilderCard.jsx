import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
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
import FormatDate from "../helpers/FormatDate";
import ClockSvg from "../assets/svg/ClockIcon";
import VoidSvg from "../assets/svg/VoidIcon";
import WrongSvg from "../assets/svg/WrongIcon";
import WrongBigSvg from "../assets/svg/WrongIconBig";
import CheckCircleBigSvg from "../assets/svg/CheckCircleBigIcon";

const BetBuilderCard = ({ data }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/pickem/betbuilder`,
          params: { data: JSON.stringify(data) }, // Stringify the object
        })
      }
      style={styles.cardShadow}
      className="w-full flex flex-col gap-y-3 rounded-lg bg-white py-4 px-4 mt-1 shadow-md mb-2"
    >
      <View className="flex flex-row items-center justify-between ">
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center gap-x-1">
            <BetbuilderSvg />
            <Text className="font-sfregular text-[8px] text-[#b7b7b7] tracking-widest">
              {FormatDate(data.start_at)}
            </Text>
          </View>
        </View>
        <RatingComponent rating={data.rating} />
      </View>
      <View className="flex flex-row items-center pr-6 py-3 justify-between">
        <View className="flex flex-row items-center gap-x-3">
          <View className="flex flex-row gap-x-1">
            <Image
              src={data.team1.icon}
              className="h-[15.52px] w-[14.16px]"
              resizeMode="contain"
            />
            <Image
              src={data.team2.icon}
              className="h-[15.52px] w-[14.16px]"
              resizeMode="contain"
            />
          </View>
          <View className="flex flex-col">
            <Text className="font-sfsemibold">{data.team1.name}</Text>
            <Text className="font-sfsemibold">{data.team2.name}</Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-center gap-x-1 ">
          {data.status === "Upcoming" ? (
            // Show ClockSvg if the status is "Upcoming"
            <ClockSvg />
          ) : data.status === "Completed" || data.status === "Running" ? (
            // Check conditions if status is "Completed"
            data.conditions.some((item) => item.status === "No") ? (
              // If any condition has status "No", show WrongSvg
              <WrongBigSvg />
            ) : data.conditions.every((item) => item.status === "Yes") ? (
              // If all conditions have status "Yes", show CheckCircleSvg
              <CheckCircleBigSvg />
            ) : (
              // If neither all "Yes" nor any "No", show default ClockSvg
              <ClockSvg />
            )
          ) : null}

          <Text
            className={`font-sfregular font-medium ${
              data.status === "Upcoming" || data.status === "Running"
                ? "text-[#FFAB2E]" // Set text color to yellow for "Upcoming"
                : data.status === "Completed" ||
                  (data.status === "Running" &&
                    data.conditions.some((item) => item.status === "No"))
                ? "text-[#F25C54]" // Set text color to red if any condition is "No"
                : data.status === "Completed" ||
                  (data.status === "Running" &&
                    data.conditions.every((item) => item.status === "Yes"))
                ? "text-[#31c163]" // Set text color to green if all conditions are "Yes"
                : ""
            }`}
          >
            {data.odds}
          </Text>
        </View>
      </View>
      <View className="px-4 w-full flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-x-[6px] ml-2">
          {data.conditions &&
            data.conditions.map((item, index) => {
              if (data.status === "Upcoming") {
                // If it's an "Upcoming" event, only show Star or Idle (yellow) icons
                return item.is_star === "1" ? (
                  <StarSvg key={index} />
                ) : (
                  <RoundCircleSvg key={index} />
                );
              } else if (
                data.status === "Running" ||
                data.status === "Completed"
              ) {
                // For "Running" or "Completed", render icons according to the item status
                return item.status === "Idle" ? (
                  <RoundCircleSvg key={index} />
                ) : item.status === "Yes" ? (
                  <CheckCircleSvg key={index} />
                ) : item.status === "No" ? (
                  <WrongSvg key={index} />
                ) : item.status === "Void" ? (
                  <VoidSvg key={index} />
                ) : null;
              }

              return null; // Fallback for any other cases
            })}
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

//!check the status upcoming or complete and handle odds text color and icon infront of it on that
//!(also see if there is any other status other than completed and upcoming)
