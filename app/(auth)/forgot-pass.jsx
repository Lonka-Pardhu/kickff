import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import StatusBarComponent from "../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";

const ForgotPass = () => {
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
            <View className="flex flex-col items-center justify-center ">
              <Image
                source={images.FingerprintImg}
                className="w-[40px] h-[40px] mb-1"
                resizeMode="contain"
              />
              <Text className="font-sfsemibold text-lg">Forgot password?</Text>
              <Text className="font-sfregular text-md text-[#707070]">
                No worries, we’ll send you reset instructions.
              </Text>
            </View>
            <View className="flex flex-col items-center gap-y-4 w-full mt-2">
              <TextInput
                className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                placeholder="Email"
              />
            </View>
            <TouchableOpacity className="bg-[#0A80FB] w-full items-center p-1 rounded-sm mt-4">
              <Text className="font-sfsemibold text-white text-[15px]">
                Reset
                <Text className="font-pcuregular font-medium">password</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default ForgotPass;
