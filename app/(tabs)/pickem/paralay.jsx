import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import MadridSvg from "../../../assets/svg/MadridIcon";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import CheckCircleSvg from "../../../assets/svg/CheckCircleIcon";
import { useLocalSearchParams, useRouter } from "expo-router";
import RatingComponent from "../../../components/RatingComponent";
import StarSvg from "../../../assets/svg/StarIcon";
import CornerDesignSvg from "../../../assets/svg/CornerDesignIcon";
import ParalaySvg from "../../../assets/svg/ParalayIcon";
import VoidSvg from "../../../assets/svg/VoidIcon";
import RoundCircleSvg from "../../../assets/svg/RoundCircleIcon";
import CheckCircleBigSvg from "../../../assets/svg/CheckCircleBigIcon";
import WrongSvg from "../../../assets/svg/WrongIcon";

const paralay = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [predictionData, setPredictionData] = useState({});

  useEffect(() => {
    if (params && params.data) {
      const parsedData = JSON.parse(params.data);
      setPredictionData(parsedData);
      console.log(parsedData.conditions);
    }
  }, []);

  const formatTime = (startAt) => {
    const date = new Date(startAt);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format, keeping 12 intact
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Ensure double-digit minutes
    return `${hours}:${formattedMinutes}${ampm}`;
  };

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
        <View className="px-4">
          <View
            className="w-full my-2 bg-white rounded-lg shadow-md relative"
            style={styles.cardShadow}
          >
            <View className="w-full h-auto mb-6 px-4 py-4">
              <View className="w-full flex flex-row items-center justify-between mb-4">
                <ParalaySvg />
                <RatingComponent rating={predictionData?.rating} />
              </View>
              {predictionData?.conditions?.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="flex flex-row items-start justify-between w-full pr-4 py-3"
                  >
                    <View className="flex flex-row gap-x-4">
                      <View className="flex flex-col items-center ">
                        <Text className="font-sfsemibold text-[8px] tracking-widest font-medium leading-[10px] mb-1">
                          {formatTime(item.start_at)}
                        </Text>
                        <View className="flex flex-row gap-x-1">
                          <Image
                            src={item?.team1?.icon}
                            className="h-[15.52px] w-[14.16px]"
                            resizeMode="contain"
                          />
                          <Image
                            src={item?.team2?.icon}
                            className="h-[15.52px] w-[14.16px]"
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                      <View className="flex flex-row gap-x-1">
                        <View>
                          {item.status === "Idle" ? (
                            <RoundCircleSvg />
                          ) : item.status === "Yes" ? (
                            <CheckCircleBigSvg />
                          ) : item.status === "No" ? (
                            <WrongSvg />
                          ) : item.status === "Void" ? (
                            <VoidSvg />
                          ) : null}
                        </View>
                        <View className="flex flex-col gap-y-[6px]">
                          <View className="flex flex-row items-center gap-x-1">
                            <Text
                              className={`${
                                item.status === "Void"
                                  ? "text-[#8A8A8E] line-through"
                                  : "text-[#0158C5]"
                              } font-sfsemibold text-[12px] leading-[12px]`}
                            >
                              {/* {item.option.title} */}
                            </Text>
                            {item.is_star === "1" && <StarSvg />}
                          </View>
                          <Text className="text-[#b6b6b6] font-sfregular text-[11px] leading-[12px]">
                            {item.option.name}
                          </Text>
                          <Text className="text-[#b6b6b6] font-sfregular text-[11px]  leading-[12px]">
                            {item.team1.name} vs {item.team2.name}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text
                        className={`font-sfsemibold ${
                          item.status === "Void"
                            ? "line-through text-[#8A8A8E]"
                            : ""
                        } text-[15px] leading-[15px]`}
                      >
                        {item.odds}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
            <CornerDesignSvg />
          </View>
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default paralay;

//! render the joining line only when there is next bet build in the data
//! render join icon according to data (yellow, correct, wrong, wide)
