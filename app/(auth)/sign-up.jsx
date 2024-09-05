import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import StatusBarComponent from "../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import { useRouter } from "expo-router";

const SignUp = () => {
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
          <View className="p-3 flex-1">
            <View className="flex flex-col items-center justify-center">
              <Image
                source={images.LogoImg}
                className="w-[45px] h-[55px] m-4"
                resizeMode="contain"
              />
              <Text className="font-sfregular px-4 text-[#999999]">
                Create an account and enjoy best rated picks ,articles, trending
                strories and more.
              </Text>
              <View className="flex flex-col items-center gap-y-4 w-full mt-2">
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="First Name"
                />
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Last Name"
                />
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Username"
                />
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Email"
                />
                <TextInput
                  className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                  placeholder="Password"
                />
                <Text className="font-sfregular text-[12px] text-[#999999]">
                  Your password must be between 8 and 30 characters.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/trends")}
              className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4"
            >
              <Text className="font-sfsemibold text-white text-[15px]">
                Sign <Text className="font-pcuregular font-medium">up</Text>
              </Text>
            </TouchableOpacity>
            <View className="mt-[10%]">
              <Text className="font-sfregular text-[12px] text-center">
                By signing up your agree to our
                <Text className="text-[#0A80FB]"> Terms & Conditions</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default SignUp;
