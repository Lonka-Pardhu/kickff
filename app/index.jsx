import { Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import MainSvg from "../assets/svg/MainIcon";
import StatusBarComponent from "../components/customStatusBar";

const index = () => {
  return (
    <>
      <Redirect href="/verify-otp" />
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <View className="flex-1 items-center justify-center bg-[#015AD2]">
          <MainSvg />
        </View>
      </StatusBarComponent>
    </>
  );
};

export default index;
