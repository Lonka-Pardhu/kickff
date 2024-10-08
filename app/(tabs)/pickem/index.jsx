import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert,
  Image,
} from "react-native";
import StatusBarComponent from "../../../components/customStatusBar";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomImageCarousel from "../../../components/CustomImageCarousel";
import UpComingSvg from "../../../assets/svg/UpComingIcon";
import CompletedSvg from "../../../assets/svg/CompletedIcon";
import SportsCategory from "../../../components/SportsCategory";
import BetBuilderCard from "../../../components/BetBuilderCard";
import ParalayCard from "../../../components/ParalayCard";
import SinglePredCard from "../../../components/SinglePredCard";
import { getSportPickems } from "../../../services/ApiCalls";
import Spinner from "react-native-loading-spinner-overlay";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "expo-router";
import images from "../../../constants/images";

const pickem = () => {
  const width = Dimensions.get("window").width;
  const { userToken } = useAuth();
  const [pickemsData, setPickemsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [activeSportId, setActiveSportId] = useState("");
  const [activeCategory, setActiveCategory] = useState("Upcoming");

  useEffect(() => {
    setIsLoading(true);
    const fetchPickems = async () => {
      try {
        const formData = new FormData();
        formData.append("category_id", 4);

        formData.append("status", activeCategory);
        const pickemsRes = await getSportPickems(formData, userToken);
        if (pickemsRes && pickemsRes?.status === 200) {
          setPickemsData(pickemsRes.data.pickems);
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 401) {
          Alert.alert("Something went wrong!🧐", "Please login.", [
            {
              text: "Ok",
              onPress: () => router.replace("/sign-in"),
            },
          ]);
        }
        console.log(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPickems();
  }, [activeCategory, activeSportId]);

  return (
    <>
      <Spinner visible={isLoading} />
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
              <TouchableOpacity onPress={() => setActiveCategory("All")}>
                <Text
                  className={`font-sfregular text-[13px] ${
                    activeCategory === "All" ? "text-black" : "text-[#979797]"
                  }`}
                >
                  all
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveCategory("Upcoming")}>
                <View className="flex flex-row items-center">
                  <UpComingSvg
                    fill={activeCategory === "Upcoming" ? "#1493FF" : "#979797"}
                  />
                  <Text
                    className={`font-sfregular text-[13px] ${
                      activeCategory === "Upcoming"
                        ? "text-black"
                        : "text-[#979797]"
                    }`}
                  >
                    upcoming
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveCategory("Completed")}>
                <View className="flex flex-row items-center">
                  <CompletedSvg
                    fill={
                      activeCategory === "Completed" ? "#1493FF" : "#979797"
                    }
                  />
                  <Text
                    className={`font-sfregular text-[13px] ${
                      activeCategory === "Completed"
                        ? "text-black"
                        : "text-[#979797]"
                    }`}
                  >
                    completed
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {pickemsData.length > 0 ? (
              <View className="px-4 py-2 flex flex-col items-center justify-center">
                {pickemsData.map((pickem, index) => {
                  switch (pickem.model) {
                    case "BetBuilder":
                      return <BetBuilderCard key={index} data={pickem.data} />;

                    case "Parlay":
                      return <ParalayCard key={index} data={pickem.data} />;

                    case "Prediction":
                      return <SinglePredCard key={index} data={pickem.data} />;

                    default:
                      return null;
                  }
                })}
              </View>
            ) : (
              <View className="px-4 py-2 flex flex-col items-center justify-center">
                <Image
                  source={images.WaitingGuyImage}
                  className="w-[215px] h-[170px]"
                  resizeMode="contain"
                />
                <Text className="text-[#979797] font-sfregular text-[11px]">
                  matches are{" "}
                  <Text className="font-pcuregular text-[#F25C54]">not</Text>{" "}
                  available.
                </Text>
              </View>
            )}
          </ScrollView>
        </StatusBarComponent>
      </GestureHandlerRootView>
    </>
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
