import { View, Text, Image, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import StatusBarComponent from "../../components/customStatusBar";
import TrendsSvg from "../../assets/svg/TrendsIcon";
import images from "../../constants/images";
import { useRouter } from "expo-router";
const index = () => {
  const router = useRouter();
  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <View className="flex-1 items-center justify-center px-4">
        <Image
          source={images.AuthIndex}
          resizeMode="contain"
          className="w-[80%] h-[100px]"
        />
        <TouchableOpacity
          onPress={() => router.push("/sign-up")}
          className=" w-full"
        >
          <View className="bg-[#0A80FB] px-4 py-2 rounded-md w-full flex flex-row items-center justify-between">
            <Text className="font-sfsemibold text-white text-[15px]">
              Sign <Text className="font-pcuregular font-medium">up</Text>
            </Text>
            <Entypo name="chevron-small-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <View className="flex flex-row self-start">
          <Text className="font-sfregular self-start p-2 text-[#707070] text-[15px]">
            Already a member?
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="flex flex-row items-center"
          >
            <Text className="font-sfsemibold text-[#0A80FB]">
              Sign<Text className="font-pcuregular font-normal">in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </StatusBarComponent>
  );
};

export default index;
