import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import AmericanFootballSvg from "../assets/svg/AmericanFootball";
import BaseBallSvg from "../assets/svg/BaseBallIcon";
import BasketBallSvg from "../assets/svg/BasketBallIcon";
import CricketSvg from "../assets/svg/CricketIcon";
import TennisBallSvg from "../assets/svg/TennisBallIcon";
import DartBoardSvg from "../assets/svg/DartBoardIcon";
import HockeySvg from "../assets/svg/HockeyIcon";
import VolleyBallSvg from "../assets/svg/VolleyBallIcon";
import SoccerSvg from "../assets/svg/SoccerIcon";
import { useAuth } from "../context/AuthContext";
import { getSports } from "../services/ApiCalls";
import Spinner from "react-native-loading-spinner-overlay";

const SportsCategory = () => {
  const { userToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  // const [sports, setSports] = useState([]);
  const [activeSport, setActiveSport] = useState("Soccer");

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

  // useEffect(() => {
  //   setIsLoading(true);
  //   const fetchSports = async () => {
  //     try {
  //       const sportsRes = await getSports(userToken);
  //       if (sportsRes && sportsRes?.status === 200) {
  //         console.log(sportsRes.data.sports);
  //         setSports(sportsRes.sports);
  //       }
  //     } catch (error) {
  //       if (error?.response?.status === 401) {
  //         Alert.alert("Something went wrong!🧐", "Please login.", [
  //           {
  //             text: "Ok",
  //             onPress: () => router.replace("/sign-in"),
  //           },
  //         ]);
  //       }
  //       console.log(error.response.data);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchSports();
  // }, []);

  return (
    <>
      <Spinner visible={isLoading} />
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
          {sports?.map((sport, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveSport(sport.category.name)}
              className="flex flex-col items-center justify-center"
            >
              <View className="bg-[#E4E4E7] p-2 rounded-xl relative">
                <sport.Icon
                  fill={activeSport === sport.name ? "#1493FF" : "#979797"}
                />
                {sport.notification && (
                  <View className="h-3 w-3 rounded-full bg-red-600 border-2 border-white absolute right-0 top-0"></View>
                )}
              </View>
              <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
                {sport.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SportsCategory;
