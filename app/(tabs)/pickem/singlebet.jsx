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
import { PaperProvider, ProgressBar, MD3Colors } from "react-native-paper";
import FormatDate from "../../../helpers/FormatDate";

const singlebet = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [activeCategory, setActiveCategory] = useState("insights");
  const [predictionData, setPredictionData] = useState({});
  const [team1Progress, setTeam1Progress] = useState(0);
  const [team2Progress, setTeam2Progress] = useState(0);
  const [handshakeProgress, setHandshakeProgress] = useState(0);

  useEffect(() => {
    if (params && params.data) {
      const parsedData = JSON.parse(params.data);
      setPredictionData(parsedData);
      // console.log(parsedData.conditions);
    }
  }, []);

  useEffect(() => {
    if (predictionData?.team1_prediction && predictionData?.team2_prediction) {
      const team1 = parseInt(predictionData.team1_prediction) / 100;
      const team2 = parseInt(predictionData.team2_prediction) / 100;
      const handshake = 1 - (team1 + team2);

      setTeam1Progress(team1);
      setTeam2Progress(team2);
      setHandshakeProgress(handshake);
    }
  }, [predictionData]);

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
                  {FormatDate(predictionData?.start_at)}
                </Text>
                <RatingComponent rating={4} />
              </View>
              <View className="flex flex-row items-center justify-between w-full">
                <View className="flex flex-row items-center justify-center gap-x-1 ">
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
                <View className="w-3/5 flex flex-col gap-y-1 py-2">
                  <View className="flex flex-row items-center justify-between">
                    <Text className="font-sfsemibold">
                      {predictionData?.team1?.name}
                    </Text>
                    {predictionData.team1_score !== "null" && (
                      <Text className="font-sfsemibold">
                        {predictionData?.team1_score}
                      </Text>
                    )}
                  </View>
                  <View className="flex flex-row items-center justify-between">
                    <Text className="font-sfsemibold">
                      {predictionData?.team2?.name}
                    </Text>
                    {predictionData.team2_score !== "null" && (
                      <Text className="font-sfsemibold text-[#979797]">
                        {predictionData?.team2_score}
                      </Text>
                    )}
                  </View>
                </View>
                <View className="flex flex-row items-center justify-center gap-x-1 ">
                  {predictionData.status === "Upcoming" ? (
                    <ClockSvg />
                  ) : predictionData.result === "No" ? (
                    <WrongSvg />
                  ) : predictionData.result === "Yes" ? (
                    <CheckCircleSvg />
                  ) : null}
                  <Text
                    className={`font-sfregular font-medium ${
                      predictionData.status === "Upcoming"
                        ? "text-[#FFAB2E]"
                        : predictionData.result === "No"
                        ? "text-[#F25C54]"
                        : predictionData.result === "Yes"
                        ? "text-[#31c163]"
                        : ""
                    }`}
                  >
                    {predictionData.odds}
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
              <>
                <View className="flex flex-row items-center gap-x-2 w-full">
                  <LightBulbSvg />
                  <Text className="font-sfregular font-medium text-[#838E94] text-[12px]">
                    {predictionData?.name}
                  </Text>
                </View>
                <View className="mt-2">
                  <Text className="font-sfregular text-[#8A8A8E] text-[13px]">
                    {predictionData?.reason}
                  </Text>
                </View>
              </>
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
                {predictionData && (
                  <View className="flex flex-col gap-y-2 mt-4 w-full px-4">
                    <View className="flex flex-row gap-x-2 w-full items-center">
                      <View>
                        <Image
                          src={predictionData?.team1?.icon}
                          className="h-[15.52px] w-[14.16px]"
                          resizeMode="contain"
                        />
                      </View>
                      <View className="w-4/5">
                        <ProgressBar
                          progress={team1Progress}
                          theme={{ colors: { primary: "#203B71" } }}
                          className="h-[10px] w-full"
                        />
                      </View>
                      <Text className="text-[#B1BBC1] font-sfregular">
                        {`${Math.round(team1Progress * 100)}%`}
                      </Text>
                    </View>
                    <View className="flex flex-row gap-x-2 w-full items-center">
                      <View>
                        <Image
                          src={predictionData?.team2?.icon}
                          className="h-[15.52px] w-[14.16px]"
                          resizeMode="contain"
                        />
                      </View>
                      <View className="w-4/5">
                        <ProgressBar
                          progress={team2Progress}
                          theme={{ colors: { primary: "#203B71" } }}
                          className="h-[10px] w-full"
                        />
                      </View>
                      <Text className="text-[#B1BBC1] font-sfregular">
                        {`${Math.round(team2Progress * 100)}%`}
                      </Text>
                    </View>
                    <View className="flex flex-row gap-x-2 w-full items-center">
                      <View>
                        <Image
                          source={images.HandshakeImage}
                          resizeMode="contain"
                          className="w-[20px] h-[20px]"
                        />
                      </View>
                      <View className="w-4/5">
                        <ProgressBar
                          progress={handshakeProgress}
                          theme={{ colors: { primary: "#203B71" } }}
                          className="h-[10px] w-full"
                        />
                      </View>
                      <Text className="text-[#B1BBC1] font-sfregular">
                        {`${Math.round(handshakeProgress * 100)}%`}
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            )}
          </View>
        </ScrollView>
      </StatusBarComponent>
    </PaperProvider>
  );
};

export default singlebet;
