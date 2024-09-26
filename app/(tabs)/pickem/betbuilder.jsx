import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import BetbuilderSvg from "../../../assets/svg/BetBuilderIcon";
import MadridSvg from "../../../assets/svg/MadridIcon";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import CheckCircleSvg from "../../../assets/svg/CheckCircleIcon";
import { useRouter } from "expo-router";

const betbuilder = () => {
  const router = useRouter();
  return (
    <StatusBarComponent>
      <ScrollView className="bg-white flex-1">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex flex-row items-center p-2"
        >
          <Feather name="chevron-left" size={24} color="black" />
          <Text className="font-sfsemibold text-[15px]">Back</Text>
        </TouchableOpacity>
        <View className="px-4 py-2 ">
          <TouchableOpacity
            style={styles.cardShadow}
            className="w-full rounded-lg h-auto bg-white py-4 px-4 shadow-md"
          >
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-center gap-x-1">
                <BetbuilderSvg />
                <Text className="font-sfregular text-[8px] text-[#b7b7b7] tracking-widest">
                  12 MAR 4:30 AM
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center pr-6 py-3 justify-between">
              <View className="flex flex-row items-center gap-x-3">
                <View className="flex flex-row gap-x-1">
                  <BarcelonaSvg />
                  <MadridSvg />
                </View>
                <View className="flex flex-col">
                  <Text className="font-sfsemibold">Barcelona</Text>
                  <Text className="font-sfsemibold">Real Madrid</Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-center gap-x-1 ">
                <CheckCircleSvg />
                <Text className="font-sfregular font-medium text-[#FFAB2E]">
                  2.54
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </StatusBarComponent>
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

export default betbuilder;
