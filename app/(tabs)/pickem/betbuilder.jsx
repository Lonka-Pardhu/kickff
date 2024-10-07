import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import BetbuilderSvg from "../../../assets/svg/BetBuilderIcon";
import MadridSvg from "../../../assets/svg/MadridIcon";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import CheckCircleSvg from "../../../assets/svg/CheckCircleIcon";
import { useLocalSearchParams, useRouter } from "expo-router";
import RatingComponent from "../../../components/RatingComponent";
import StarSvg from "../../../assets/svg/StarIcon";
import CornerDesignSvg from "../../../assets/svg/CornerDesignIcon";
import WrongBigSvg from "../../../assets/svg/WrongIconBig";
import CheckCircleBigSvg from "../../../assets/svg/CheckCircleBigIcon";
import FormatDate from "../../../helpers/FormatDate";
import WrongSvg from "../../../assets/svg/WrongIcon";
import VoidSvg from "../../../assets/svg/VoidIcon";
import RoundCircleSvg from "../../../assets/svg/RoundCircleIcon";

const betbuilder = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [predictionData, setPredictionData] = useState({});

  useEffect(() => {
    if (params && params.data) {
      const parsedData = JSON.parse(params.data);
      setPredictionData(parsedData);
      // console.log(parsedData.conditions);
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
        <View className="px-4">
          <View
            className="w-full my-2 bg-white rounded-lg shadow-md relative"
            style={styles.cardShadow}
          >
            <View className="px-4 py-4">
              <View className="w-full h-auto mb-6">
                <View className="flex flex-row items-center">
                  <View className="flex flex-row items-center gap-x-1">
                    <BetbuilderSvg />
                    <Text className="font-sfregular text-[8px] text-[#b7b7b7] tracking-widest">
                      {FormatDate(predictionData?.start_at)}
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row items-center pr-6 py-3 justify-between">
                  <View className="flex flex-row items-center gap-x-3">
                    <View className="flex flex-row gap-x-1">
                      <Image
                        src={predictionData?.team1?.icon}
                        className="h-[15.52px] w-[14.16px]"
                        resizeMode="contain"
                      />
                      <Image
                        src={predictionData?.team2?.icon}
                        className="h-[15.52px] w-[14.16px]"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="flex flex-col">
                      <Text className="font-sfsemibold">
                        {predictionData?.team1?.name}
                      </Text>
                      <Text className="font-sfsemibold">
                        {predictionData?.team2?.name}
                      </Text>
                    </View>
                  </View>
                  {predictionData && (
                    <View className="flex flex-row items-center justify-center gap-x-1 ">
                      {predictionData.status === "Upcoming" ? (
                        // Show ClockSvg if the status is "Upcoming"
                        <ClockSvg />
                      ) : predictionData.status === "Completed" ||
                        predictionData.status === "Running" ? (
                        // Check conditions if status is "Completed"
                        predictionData.conditions.some(
                          (item) => item.status === "No"
                        ) ? (
                          // If any condition has status "No", show WrongSvg
                          <WrongBigSvg />
                        ) : predictionData.conditions.every(
                            (item) => item.status === "Yes"
                          ) ? (
                          // If all conditions have status "Yes", show CheckCircleSvg
                          <CheckCircleBigSvg />
                        ) : (
                          // If neither all "Yes" nor any "No", show default CheckCircleSvg
                          <ClockSvg />
                        )
                      ) : null}

                      <Text
                        className={`font-sfregular font-medium ${
                          predictionData.status === "Upcoming" ||
                          predictionData.status === "Running"
                            ? "text-[#FFAB2E]" // Set text color to yellow for "Upcoming"
                            : predictionData.status === "Completed" ||
                              (predictionData.status === "Running" &&
                                predictionData.conditions.some(
                                  (item) => item.status === "No"
                                ))
                            ? "text-[#F25C54]" // Set text color to red if any condition is "No"
                            : predictionData.status === "Completed" ||
                              (predictionData.status === "Running" &&
                                predictionData.conditions.every(
                                  (item) => item.status === "Yes"
                                ))
                            ? "text-[#31c163]" // Set text color to green if all conditions are "Yes"
                            : ""
                        }`}
                      >
                        {predictionData.odds}
                      </Text>
                    </View>
                  )}
                </View>
              </View>

              <View className="px-4">
                {predictionData?.conditions?.map((item, index) => {
                  return (
                    <>
                      <View
                        key={index}
                        className="flex flex-row items-center justify-between -mt-[14px]"
                      >
                        <View className="flex flex-row items-center">
                          {item.status === "Idle" ? (
                            <RoundCircleSvg />
                          ) : item.status === "Yes" ? (
                            <CheckCircleSvg />
                          ) : item.status === "No" ? (
                            <WrongSvg />
                          ) : item.status === "Void" ? (
                            <VoidSvg />
                          ) : null}
                          <View className="ml-2">
                            <Text
                              className={`font-sfsemibold ${
                                item.status === "Void"
                                  ? "text-[#8A8A8E] line-through"
                                  : "text-[#0158C5]"
                              } `}
                            >
                              {item.title}
                            </Text>
                            <Text className="font-sfsemibold text-[#b7b7b7] text-[8px]">
                              {item.option.name}
                            </Text>
                          </View>
                        </View>
                        <RatingComponent rating={item.rating} />
                      </View>
                      {index !== predictionData.conditions.length - 1 && (
                        <View
                          className={`bg-[#D4D4D4] w-[2px] h-[50px] ${
                            Platform.OS === "ios" ? " -mt-[8px]" : "-mt-[14px]"
                          } ml-1`}
                        ></View>
                      )}
                    </>
                  );
                })}
              </View>
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

export default betbuilder;
