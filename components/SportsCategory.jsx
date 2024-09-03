import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import AmericanFootballSvg from "../assets/svg/AmericanFootball";
import BaseBallSvg from "../assets/svg/BaseBallIcon";
import BasketBallSvg from "../assets/svg/BasketBallIcon";
import CricketSvg from "../assets/svg/CricketIcon";
import TennisBallSvg from "../assets/svg/TennisBallIcon";
import DartBoardSvg from "../assets/svg/DartBoardIcon";
import HockeySvg from "../assets/svg/HockeyIcon";
import VolleyBallSvg from "../assets/svg/VolleyBallIcon";
import SoccerSvg from "../assets/svg/SoccerIcon";

const SportsCategory = () => {
  const [activeSport, setActiveSport] = useState("Soccer");
  return (
    <View className="pl-4 py-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "flex-start",
          gap: 10,
          paddingVertical: 6,
        }}
        horizontal
      >
        <TouchableOpacity
          onPress={() => setActiveSport("Soccer")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl relative">
            <SoccerSvg
              fill={activeSport === "Soccer" ? "#1493FF" : "#979797"}
            />
            <View className="h-3 w-3 rounded-full bg-red-600 border-2 border-white absolute right-0 top-0"></View>
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Football
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveSport("BasketBall")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl ">
            <BasketBallSvg
              fill={activeSport === "BasketBall" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Basketball
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveSport("AmericanFootball")}
          className="flex flex-col items-centerstart w-[55px] justify-center"
        >
          <View className="bg-[#E4E4E7] w-full p-2 rounded-xl ">
            <AmericanFootballSvg
              fill={activeSport === "AmericanFootball" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            American Football
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveSport("Cricket")}
          className="flex flex-col items-centerstart w-[55px] justify-center"
        >
          <View className="bg-[#E4E4E7] w-full p-2 rounded-xl relative">
            <CricketSvg
              fill={activeSport === "Cricket" ? "#1493FF" : "#979797"}
            />
            <View className="h-3 w-3 rounded-full bg-red-600 border-2 border-white absolute right-0 top-0"></View>
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Cricket
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSport("Tennis")}
          className="flex flex-col items-centerstart w-[55px] justify-center"
        >
          <View className="bg-[#E4E4E7] w-full p-2 rounded-xl ">
            <TennisBallSvg
              fill={activeSport === "Tennis" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Tennis
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSport("Baseball")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl ">
            <BaseBallSvg
              fill={activeSport === "Baseball" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Base Ball
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSport("Hockey")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl ">
            <HockeySvg
              fill={activeSport === "Hockey" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Hockey
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSport("DartBoard")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl ">
            <DartBoardSvg
              fill={activeSport === "DartBoard" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Dart board
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveSport("VolleyBall")}
          className="flex flex-col items-center justify-center"
        >
          <View className="bg-[#E4E4E7] p-2 rounded-xl ">
            <VolleyBallSvg
              fill={activeSport === "VolleyBall" ? "#1493FF" : "#979797"}
            />
          </View>
          <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
            Volleyball
          </Text>
        </TouchableOpacity>

        {/* <View className="mt-2">
            <Image
              source={images.HomeImg1}
              className="w-full h-[210px] rounded-lg my-1"
              resizeMode="cover"
            />
            <View>
              <View className="flex flex-row items-center gap-x-1">
                <UpArrowSvg />
                <Text className="font-sfsemibold text-[#b2b2b2] text-[13px]">
                  Lorem Ipsum
                </Text>
              </View>
              <View>
                <Text className="font-sfbold text-[13px] leading-2">
                  Lorem Ipsum is simply dummy tex.
                </Text>
                <Text className="text-[#7a7a7a] font-sfregular leading-[18px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <Text className="font-sfregular text-[#FF6B6B] text-[13px]">
                  4 hours ago
                </Text>
              </View>
            </View>
          </View> */}
      </ScrollView>
    </View>
  );
};

export default SportsCategory;
