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
import CheckCircleSvg from "../assets/svg/CheckCircleIcon";

const formatDate = (dateString) => {
  const dateObj = new Date(dateString);

  // Get day, month and time
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString("default", { month: "short" }); // Short month name
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Format hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // if hour is 0, set to 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Final time string
  const time = `${hours}:${formattedMinutes}${ampm}`;

  return {
    day,
    month: month.toUpperCase(),
    time,
  };
};

const SinglePredCard = ({ data }) => {
  const router = useRouter();
  const { day, month, time } = formatDate(data.start_at);

  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: `/pickem/singlebet`,
          params: { data: JSON.stringify(data) }, // Stringify the object
        })
      }
      style={styles.cardShadow}
      className="w-full rounded-lg bg-white py-4 pr-4 pl-1 mb-2 shadow-md md-2"
    >
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center">
          <View className="flex flex-row items-center">
            <View
              className={`h-1 w-1 rounded-full`}
              style={{ backgroundColor: data.league.color }}
            ></View>
            <Image
              source={{ uri: data.league.icon }}
              className="h-[40px] w-[40px]"
              resizeMode="cover"
            />
          </View>
          <View className="flex flex-col">
            <Text className="font-sfsemibold">SerieA</Text>
            <View className="flex items-center flex-row gap-x-1">
              <Text className="font-sfsemibold text-[8px] font-medium  tracking-widest">
                {day} {month}
              </Text>
              <View className="h-1 w-1 bg-black rounded-full"></View>
              <Text className="font-sfsemibold text-[8px] tracking-widest font-medium">
                {time}
              </Text>
            </View>
          </View>
        </View>
        <RatingComponent rating={data.rating} />
      </View>
      <View className="pr-6 pl-10 py-2">
        <View className="flex flex-row items-center justify-between w-full">
          <View className="w-3/5 flex flex-col gap-y-2 py-2">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-2 ">
                <Image
                  src={data.team1.icon}
                  className="h-[15.52px] w-[14.16px]"
                  resizeMode="contain"
                />
                <Text className="font-sfsemibold">{data.team1.name}</Text>
              </View>
              {data.team1_score !== "null" && (
                <Text className="font-sfsemibold m-1">{data.team1_score}</Text>
              )}
            </View>
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row items-center gap-x-2 ">
                <Image
                  src={data.team2.icon}
                  className="h-[15.52px] w-[14.16px]"
                  resizeMode="contain"
                />
                <Text className="font-sfsemibold">{data.team2.name}</Text>
              </View>
              {data.team2_score !== "null" && (
                <Text className="font-sfsemibold m-1">{data.team2_score}</Text>
              )}
            </View>
          </View>
          <View className="flex flex-row items-center justify-center gap-x-1 ">
            {data.status === "Upcoming" ? (
              <ClockSvg />
            ) : data.result === "No" ? (
              <WrongSvg />
            ) : data.result === "Yes" ? (
              <CheckCircleSvg />
            ) : null}
            <Text
              className={`font-sfregular font-medium ${
                data.status === "Upcoming"
                  ? "text-[#FFAB2E]"
                  : data.result === "No"
                  ? "text-[#F25C54]"
                  : data.result === "Yes"
                  ? "text-[#31c163]"
                  : ""
              }`}
            >
              {data.odds}
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
            {data.name}
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
