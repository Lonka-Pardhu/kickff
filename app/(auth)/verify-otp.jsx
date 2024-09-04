import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import StatusBarComponent from "../../components/customStatusBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import images from "../../constants/images";
import Feather from "@expo/vector-icons/Feather";
import { OtpInput } from "react-native-otp-entry";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [hasError, setHasError] = useState(false);
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
                source={images.emailImg}
                className="w-[40px] h-[40px] mb-1"
                resizeMode="contain"
              />
              <Text className="font-sfsemibold text-lg">Enter your code</Text>
              <Text className="font-sfregular text-md text-[#707070]">
                We sent a code to{" "}
                <Text className="text-black font-semibold">test@gmail.com</Text>
              </Text>
            </View>
            <View className=" flex flex-row items-center justify-center mt-4">
              <OtpInput
                className="font-sfregular"
                numberOfDigits={4}
                onTextChange={(text) => {
                  setOtp(text);
                  setHasError(false);
                }}
                type="numeric"
                theme={{
                  containerStyle: {
                    borderRadius: 5,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  },
                  pinCodeContainerStyle: {
                    borderRadius: 2,
                    height: 50,
                    width: 50,
                    backgroundColor: "#f2f2f2",
                  },
                }}
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

export default VerifyOtp;
