import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import UpArrowSvg from "../../../assets/svg/UpArrowIcon";
import images from "../../../constants/images";
import StatusBarComponent from "../../../components/customStatusBar";
import SportsCategory from "../../../components/SportsCategory";
import Feather from "@expo/vector-icons/Feather";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AmericanFootballSvg from "../../../assets/svg/AmericanFootball";
import BaseBallSvg from "../../../assets/svg/BaseBallIcon";
import BasketBallSvg from "../../../assets/svg/BasketBallIcon";
import CricketSvg from "../../../assets/svg/CricketIcon";
import TennisBallSvg from "../../../assets/svg/TennisBallIcon";
import DartBoardSvg from "../../../assets/svg/DartBoardIcon";
import HockeySvg from "../../../assets/svg/HockeyIcon";
import VolleyBallSvg from "../../../assets/svg/VolleyBallIcon";
import SoccerSvg from "../../../assets/svg/SoccerIcon";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
// Sports Data
const sports = [
  {
    name: "Soccer",
    label: "Football",
    Icon: SoccerSvg,
    notification: true,
  },
  {
    name: "BasketBall",
    label: "Basketball",
    Icon: BasketBallSvg,
  },
  {
    name: "AmericanFootball",
    label: "American Football",
    Icon: AmericanFootballSvg,
  },
  {
    name: "Cricket",
    label: "Cricket",
    Icon: CricketSvg,
    notification: true,
  },
  {
    name: "Tennis",
    label: "Tennis",
    Icon: TennisBallSvg,
  },
  {
    name: "Baseball",
    label: "Base Ball",
    Icon: BaseBallSvg,
  },
  {
    name: "Hockey",
    label: "Hockey",
    Icon: HockeySvg,
  },
  {
    name: "DartBoard",
    label: "Dart Board",
    Icon: DartBoardSvg,
  },
  {
    name: "VolleyBall",
    label: "Volleyball",
    Icon: VolleyBallSvg,
  },
];

const Livescore = () => {
  const [data, setData] = useState(sports); // Use sports as initial data
  const router = useRouter();

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          className={`${
            isActive ? "bg-[#1493FF]" : "bg-white"
          } h-[65px] w-full rounded-md flex flex-row justify-between items-center border-b-[#EBEBEC] border-b-[1px]`}
        >
          <View className="flex flex-row gap-x-3 items-center">
            <View className="bg-[#E4E4E7] p-2 rounded-xl relative">
              <item.Icon
                height={20}
                width={20}
                fill={isActive ? "#000" : "#1493FF"}
              />
            </View>
            <Text
              className={`font-sfsemibold text-[16px] ${
                isActive ? "text-white" : "text-black"
              } text-center `}
            >
              {item.name}
            </Text>
          </View>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <View>
          <TouchableOpacity
            onPress={() => router.back()}
            className="flex flex-row items-center p-2"
          >
            <Feather name="chevron-left" size={24} color="black" />
            <Text className="font-sfsemibold text-[15px]">Back</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full px-4 flex-1 flex justify-center items-center">
          <DraggableFlatList
            // className="flex-1 justify-center items-center"
            data={data}
            onDragEnd={({ data }) => {
              setData(data); // Update the order of sports
            }}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
          />
        </View>
      </StatusBarComponent>
    </GestureHandlerRootView>
  );
};

export default Livescore;
