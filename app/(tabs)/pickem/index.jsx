import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import StatusBarComponent from "../../../components/customStatusBar";
import React, { useState } from "react";
import images from "../../../constants/images";
import UpArrowSvg from "../../../assets/svg/UpArrowIcon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomImageCarousel from "../../../components/CustomImageCarousel";
import UpComingSvg from "../../../assets/svg/UpComingIcon";
import CompletedSvg from "../../../assets/svg/CompletedIcon";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import MadridSvg from "../../../assets/svg/MadridIcon";
import ClockSvg from "../../../assets/svg/ClockIcon";
import SportsCategory from "../../../components/SportsCategory";
import LightBulbSvg from "../../../assets/svg/LightBulbIcon";
import ArrowRightSvg from "../../../assets/svg/ArrowRightIcon";
import CheckCircleSvg from "../../../assets/svg/CheckCircleIcon";
import BetbuilderSvg from "../../../assets/svg/BetBuilderIcon";
import ParalaySvg from "../../../assets/svg/ParalayIcon";
// import YellowRoundSvg from "../../../assets/svg/YellowRoundIcon";
import RatingComponent from "../../../components/RatingComponent";
import { router } from "expo-router";
import ColouredCircle from "../../../components/ColouredCircle";
import StarSvg from "../../../assets/svg/StarIcon";
import RoundCircleSvg from "../../../assets/svg/RoundCircleIcon";
import BetBuilderCard from "../../../components/BetBuilderCard";

const pickem = () => {
  const width = Dimensions.get("window").width;
  const [activeSport, setActiveSport] = useState("Soccer");
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="flex-1 bg-white">
          <View className="border-b-[0.5px] border-[#0000004D] p-3">
            <Text className="text-[#1493FF] text-[16px] font-sfregular">
              Picks
            </Text>
          </View>
          <View>
            <CustomImageCarousel width={width} height={130} />
          </View>
          {/* Api work */}
          <SportsCategory />
          <View
            className={`flex flex-row items-center gap-x-2 pl-4 ${
              Platform.OS === "ios" ? "py-4" : "py-2"
            }`}
          >
            <TouchableOpacity onPress={() => setActiveCategory("all")}>
              <Text
                className={`font-sfregular text-[13px] ${
                  activeCategory === "all" ? "text-black" : "text-[#979797]"
                }`}
              >
                all
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCategory("upcoming")}>
              <View className="flex flex-row items-center">
                <UpComingSvg
                  fill={activeCategory === "upcoming" ? "#1493FF" : "#979797"}
                />
                <Text
                  className={`font-sfregular text-[13px] ${
                    activeCategory === "upcoming"
                      ? "text-black"
                      : "text-[#979797]"
                  }`}
                >
                  upcoming
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveCategory("completed")}>
              <View className="flex flex-row items-center">
                <CompletedSvg
                  fill={activeCategory === "completed" ? "#1493FF" : "#979797"}
                />
                <Text
                  className={`font-sfregular text-[13px] ${
                    activeCategory === "completed"
                      ? "text-black"
                      : "text-[#979797]"
                  }`}
                >
                  completed
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="px-4 py-2 flex flex-col items-center justify-center gap-y-2">
            <BetBuilderCard />
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
                    Both Teams To Score | Over 2.5 Total Goals | Over 9.5
                    Corners | Barcelona Full Time Result | Over 4.5 Total Cards
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
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: `/pickem/singlebet`,
                  params: { id: 1 },
                })
              }
              style={styles.cardShadow}
              className="w-full rounded-lg bg-white py-4 pr-4 pl-1 shadow-md"
            >
              <View className="flex flex-row items-center justify-between">
                <View className="flex flex-row items-center">
                  <View className="flex flex-row items-center">
                    <View className="h-1 w-1 rounded-full bg-[#EF3E3A]"></View>
                    <Image
                      source={images.LeagueImg1}
                      className="h-[40px] w-[40px]"
                    />
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
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And
                    Typesetting Industry. Lorem Ipsum Has Been The Industry’s
                    Standard Dummy Text Ever Since The 1500S, When An Unknown
                    Printer Took A Galley Of Type And Scrambled It To Make A
                    Type Specimen Book.
                  </Text>
                </View>
                <ArrowRightSvg />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </StatusBarComponent>
    </GestureHandlerRootView>
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

export default pickem;

//! use svgxml form react native svg while getting data from api
//* make the rating dots component into custom
