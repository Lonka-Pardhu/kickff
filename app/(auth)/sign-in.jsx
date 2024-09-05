import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import StatusBarComponent from "../../components/customStatusBar";
import images from "../../constants/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <ScrollView className="bg-white flex-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row items-center p-2"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="font-sfsemibold text-[15px]">Back</Text>
        </TouchableOpacity>
        <KeyboardAwareScrollView>
          <View className="p-3 mt-[25%]">
            <View className="flex flex-col items-center justify-center">
              <Image
                source={images.LogoImg}
                className="w-[45px] h-[55px] m-4"
                resizeMode="contain"
              />
              <View className="flex flex-col items-center gap-y-4 w-full">
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Username"
                />
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Password"
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/forgot-pass")}
              className="w-full flex-row-reverse p-1 mt-1"
            >
              <Text className="font-sfregular text-[#707070] text-[15px]">
                Forgot password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/trends")}
              className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4"
            >
              <Text className="font-sfsemibold text-white text-[15px]">
                Sign <Text className="font-pcuregular font-medium">in</Text>
              </Text>
            </TouchableOpacity>
            <View className="flex flex-row self-start">
              <Text className="font-sfregular self-start p-2 text-[#707070] text-[15px]">
                Don't have an account?
              </Text>
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="font-sfsemibold text-[#0A80FB]">
                  Sign <Text className="font-pcuregular font-normal">up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
        <View className="flex items-center justify-center mt-[30px]">
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
  );
};

export default SignIn;
