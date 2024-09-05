import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import StatusBarComponent from "../../components/customStatusBar";
import TrendsSvg from "../../assets/svg/TrendsIcon";
import images from "../../constants/images";
import { useRouter } from "expo-router";
import Carousel from "react-native-reanimated-carousel";
import { useState } from "react";

const Welcome = () => {
  const router = useRouter();
  const width = Dimensions.get("window").width;
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselData = [
    {
      image: images.WelomeImg1,
      text: "Get the latest trending sports news delivered instantly. Stay informed with top stories, expert analysis, and breaking updates from around the world.",
    },
    {
      image: images.WelomeImg2,
      text: "Stay up-to-date with real-time scores and in-depth match details across all your favorite sports. Instant updates ensure you never miss a moment of the action.",
    },
    {
      image: images.WelomeImg3,
      text: "Boost your chances with expert sports analyses and insights. Access data-driven picks and analyses to make smarter wagers on your favorite sports.",
    },
  ];

  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <ScrollView
        className="w-full bg-white"
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 60 }}
      >
        <View className="flex-1 items-center justify-center px-4">
          <Carousel
            loop
            width={width}
            className=" h-[350px] bg-blue-800"
            autoPlay={true}
            data={carouselData}
            scrollAnimationDuration={2000}
            renderItem={({ item }) => (
              <View style={{ width }} className="p-3 bg-white">
                <Image
                  source={item.image}
                  resizeMode="contain"
                  className="w-full h-full rounded-sm"
                />
              </View>
            )}
            onSnapToItem={(index) => setActiveSlide(index)}
          />
          <View className="flex-row justify-center items-center my-4">
            {carouselData.map((_, index) => (
              <View
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  activeSlide === index ? "bg-[#0A80FB]" : "bg-[#D3D3D3]"
                }`}
              />
            ))}
          </View>
          <View className="h-32 w-full flex items-center justify-center my-4">
            <Text className="text-center font-sfsemibold">
              "{carouselData[activeSlide].text}"
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/auth-home")}
            className=" w-full"
          >
            <View className="bg-[#0A80FB] px-4 py-3 rounded-md w-full flex items-center justify-between">
              <Text className="font-sfsemibold text-white text-[15px]">
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default Welcome;
