import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import UpArrowSvg from "../../assets/svg/UpArrowIcon";
import images from "../../constants/images";
import StatusBarComponent from "../../components/customStatusBar";
import Entypo from "@expo/vector-icons/Entypo";
import UserEditSvg from "../../assets/svg/UserEditIcon";
import BurgerSvg from "../../assets/svg/BurgerIcon";
import HeadsetSvg from "../../assets/svg/HeadsetIcon";
import CheckCircleSvg from "../../assets/svg/CheckCircleIcon";
import FingerprintSvg from "../../assets/svg/FingerprintIcon";
import CheckCircleBlackSvg from "../../assets/svg/CheckCircleBlackIcon";
import { router, useRouter } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
import { useState } from "react";

const account = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { logout } = useAuth();

  const logoutUser = async () => {
    setIsLoading(true);
    try {
      await logout();
      router.replace("/sign-in");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Spinner visible={isLoading} />
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="flex-1 bg-white">
          <View className="border-b-[0.5px] border-[#0000004D] p-3">
            <Text className="text-[16px] text-center font-sfsemibold">
              Account
            </Text>
          </View>
          <View className="p-3 ">
            <View className="flex flex-col items-center justify-center mt-2">
              <Image
                source={images.LeagueImg1}
                className="h-[70px] w-[70px] rounded-full"
              />
              <Text className="font-sfregular text-[#707070] text-[15px]">
                Lonka Pardhu
              </Text>
            </View>
            <TouchableOpacity className="flex items-center flex-row gap-x-1 my-8">
              <Image
                source={images.CoinsBanner}
                className="w-[180px] h-[40px]"
                resizeMode="contain"
              />
              <Text className="font-sfsemibold text-[18px] text-[#CF8A0E]">
                000
              </Text>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row items-center justify-between py-2">
              <View className="flex flex-row items-center gap-x-2">
                <UserEditSvg />
                <Text className="font-sfregular font-medium text-[17px] text-[#979797]">
                  Personal Info.
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between py-2">
              <View className="flex flex-row items-center gap-x-2">
                <BurgerSvg />
                <Text className="font-sfregular font-medium text-[17px] text-[#979797]">
                  Sports Order
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between py-2">
              <View className="flex flex-row items-center gap-x-2">
                <FingerprintSvg />
                <Text className="font-sfregular font-medium text-[17px] text-[#979797]">
                  Password
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between py-2">
              <View className="flex flex-row items-center gap-x-2">
                <CheckCircleBlackSvg />
                <Text className="font-sfregular font-medium text-[17px] text-[#979797]">
                  Verification
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center justify-between py-2">
              <View className="flex flex-row items-center gap-x-2">
                <HeadsetSvg />
                <Text className="font-sfregular font-medium text-[17px] text-[#979797]">
                  Support
                </Text>
              </View>
              <Entypo name="chevron-small-right" size={30} color="#1493FF" />
            </TouchableOpacity>
          </View>
          <View className="flex items-center justify-center mt-[30px]">
            <TouchableOpacity onPress={() => logoutUser()}>
              <Text className="font-sfsemibold text-[#1493FF] text-[17px]">
                Sign<Text className="font-pcuregular font-medium">out</Text>
              </Text>
            </TouchableOpacity>
            <View className="flex items-center justify-evenly flex-row w-full">
              <TouchableOpacity>
                <Text className="  text-[#707070] font-sfregular text-[12px]">
                  Privacy Policy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="  text-[#707070] font-sfregular text-[12px]">
                  Terms of Service
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </StatusBarComponent>
    </>
  );
};

export default account;
