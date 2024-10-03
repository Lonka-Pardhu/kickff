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
import MadridSvg from "../../../assets/svg/MadridIcon";
import BarcelonaSvg from "../../../assets/svg/BarcelonaIcon";
import CheckCircleSvg from "../../../assets/svg/CheckCircleIcon";
import { useRouter } from "expo-router";
import RatingComponent from "../../../components/RatingComponent";
import StarSvg from "../../../assets/svg/StarIcon";
import CornerDesignSvg from "../../../assets/svg/CornerDesignIcon";
import ParalaySvg from "../../../assets/svg/ParalayIcon";

const paralay = () => {
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
            <View className="w-full h-auto mb-6 px-4 py-4">
              <View className="w-full flex flex-row items-center justify-between">
                <ParalaySvg />
                <RatingComponent rating={3} />
              </View>

              <View className="flex flex-row items-start justify-between w-full pr-4 py-3 mt-4">
                <View className="flex flex-row gap-x-4">
                  <View className="flex flex-col items-center ">
                    <Text className="font-sfsemibold text-[8px] tracking-widest font-medium leading-[10px] mb-1">
                      4:30AM
                    </Text>
                    <View className="flex flex-row gap-x-1">
                      <BarcelonaSvg />
                      <MadridSvg />
                    </View>
                  </View>
                  <View className="flex flex-row gap-x-1">
                    <View>
                      <CheckCircleSvg />
                    </View>
                    <View className="flex flex-col gap-y-[6px]">
                      <View className="flex flex-row items-center gap-x-1">
                        <Text className="text-[#0158C5] font-sfsemibold text-[12px] leading-[12px]">
                          Yes
                        </Text>
                        <StarSvg />
                      </View>
                      <Text className="text-[#b6b6b6] font-sfregular text-[11px] leading-[12px]">
                        Both Teams to Score
                      </Text>
                      <Text className="text-[#b6b6b6] font-sfregular text-[11px]  leading-[12px]">
                        Barcelona vs Real Madrid
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <Text className="font-sfsemibold text-[15px] leading-[15px]">
                    1.56
                  </Text>
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

export default paralay;

//! render the joining line only when there is next bet build in the data
//! render join icon according to data (yellow, correct, wrong, wide)
