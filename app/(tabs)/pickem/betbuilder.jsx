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
import RatingComponent from "../../../components/RatingComponent";
import StarSvg from "../../../assets/svg/StarIcon";
import CornerDesignSvg from "../../../assets/svg/CornerDesignIcon";

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
        <View className="px-4">
          <View
            className="w-full my-2 bg-white rounded-lg shadow-md relative"
            style={styles.cardShadow}
          >
            <View className="px-4 py-4">
              <View className="w-full h-auto mb-6">
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
              </View>
              <View className="px-4">
                <View className="flex flex-row items-center justify-between -mt-[14px]">
                  <View className="flex flex-row items-center">
                    <CheckCircleSvg />
                    <View className="ml-2">
                      <Text className="font-sfsemibold text-[#0158C5]">
                        Barcelona
                      </Text>
                      <Text className="font-sfsemibold text-[#b7b7b7] text-[8px]">
                        FULL TIME RESULT
                      </Text>
                    </View>
                  </View>
                  <RatingComponent rating={4} />
                </View>
                <View className="bg-[#D4D4D4] w-[2px] h-[50px] -mt-[14px] ml-1"></View>
                <View className="flex flex-row items-center justify-between -mt-[14px]">
                  <View className="flex flex-row items-center">
                    <CheckCircleSvg />
                    <View className="ml-2">
                      <View className="flex flex-row items-center gap-x-1">
                        <Text className="font-sfsemibold text-[#0158C5]">
                          Over 2.5
                        </Text>
                        <StarSvg />
                      </View>
                      <Text className="font-sfsemibold text-[#b7b7b7] text-[8px]">
                        Total Goals
                      </Text>
                    </View>
                  </View>
                  <RatingComponent rating={3} />
                </View>
                <View className="bg-[#D4D4D4] w-[2px] h-[50px] -mt-[14px] ml-1"></View>
                <View className="flex flex-row items-center justify-between -mt-[14px]">
                  <View className="flex flex-row items-center">
                    <CheckCircleSvg />
                    <View className="ml-2">
                      <Text className="font-sfsemibold text-[#0158C5]">
                        Yes
                      </Text>
                      <Text className="font-sfsemibold text-[#b7b7b7] text-[8px]">
                        Both Teams To Score
                      </Text>
                    </View>
                  </View>
                  <RatingComponent rating={5} />
                </View>
              </View>
            </View>
            <CornerDesignSvg />
          </View>
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

//! render the joining line only when there is next bet build in the data
//! render join icon according to data (yellow, correct, wrong, wide)
