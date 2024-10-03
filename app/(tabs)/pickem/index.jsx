import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import StatusBarComponent from "../../../components/customStatusBar";
import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomImageCarousel from "../../../components/CustomImageCarousel";
import UpComingSvg from "../../../assets/svg/UpComingIcon";
import CompletedSvg from "../../../assets/svg/CompletedIcon";
import SportsCategory from "../../../components/SportsCategory";
import BetBuilderCard from "../../../components/BetBuilderCard";
import ParalayCard from "../../../components/ParalayCard";
import SinglePredCard from "../../../components/SinglePredCard";

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
          <View className="px-4 py-2 flex flex-col items-center justify-center ">
            <BetBuilderCard />
            <ParalayCard />
            <SinglePredCard />
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
