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
import { useRouter } from "expo-router";

const NewPass = () => {
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
            <View className="flex flex-col items-center justify-center ">
              {/* <Image
                source={images.FingerprintImg}
                className="w-[40px] h-[40px] mb-1"
                resizeMode="contain"
              /> */}

              <Text className="font-sfbold text-4xl text-[#0A80FB]">****</Text>
              <Text className="font-sfsemibold text-lg">Set new password</Text>
              <Text className="font-sfregular text-md text-[#707070]">
                Must be atleast 8 characters.
              </Text>
            </View>
            <View className="flex flex-col items-center gap-y-4 w-full mt-2">
              <TextInput
                className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                placeholder="Password"
              />
              <TextInput
                className="bg-[#f2f2f2] font-sfregular px-2 py-2 rounded-sm w-full"
                placeholder="Confirm password"
              />
            </View>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-[#0A80FB] w-full  p-2 rounded-sm mt-4"
            >
              <View className="flex flex-row justify-center items-center">
                <Text className="font-sfsemibold text-white text-[15px]">
                  Set
                </Text>
                <Text className="font-pcuregular text-white leading-[25px]">
                  {" "}
                  new{" "}
                </Text>
                <Text className="font-sfsemibold text-white text-[15px]">
                  password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default NewPass;
