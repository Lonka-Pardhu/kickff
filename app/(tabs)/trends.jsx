import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusBarComponent from "../../components/customStatusBar";
import images from "../../constants/images";
import UpArrowSvg from "../../assets/svg/UpArrowIcon";
import { useAuth } from "../../context/AuthContext";
const Trends = () => {
  const { token } = useAuth();
  // console.log(token);
  return (
    <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
      <ScrollView className="flex-1 w-full h-full bg-white">
        <View className="border-b-[0.5px] border-[#0000004D] p-3">
          <Text className="text-[#1493FF] text-[16px] font-sfregular">
            Trends!
          </Text>
        </View>
        <View className="p-3">
          {/* custom component */}
          {/* fix line sizes in iphone  */}
          <View className="font-sfregular text-[13px] flex flex-row ">
            <View className="w-[5px] h-[5px] bg-[#1493FF] rounded-full mt-2"></View>
            <View className="flex flex-col  ml-2">
              <Text className="font-sfregular text-[13px]">
                Premier League committed to 3pm blackout for at next three
                years.
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text className="font-sfregular text-[#DC9F12] text-[10px]">
                  EPL
                </Text>
                <View className="w-[1px] h-1 bg-[#707070]"></View>
                <Text className="font-sfregular text-[#F25C54]  text-[10px]">
                  2 hours ago
                </Text>
              </View>
            </View>
          </View>
          {/* remove all the below ones */}
          <View className="font-sfregular text-[13px] flex flex-row">
            <View className="w-[5px] h-[5px] bg-[#1493FF] rounded-full mt-2"></View>
            <View className="flex flex-col  ml-2">
              <Text className="font-sfregular text-[13px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text className="font-sfregular text-[#DC9F12] text-[10px]">
                  NFL
                </Text>
                <View className="w-[1px] h-1 bg-[#707070]"></View>
                <Text className="font-sfregular text-[#F25C54]  text-[10px]">
                  3 hours ago
                </Text>
              </View>
            </View>
          </View>
          <View className="font-sfregular text-[13px] flex flex-row">
            <View className="w-[5px] h-[5px] bg-[#1493FF] rounded-full mt-2"></View>
            <View className="flex flex-col  ml-2">
              <Text className="font-sfregular text-[13px]">
                Vols jump ahead of Georgia for the first time with five weeks
                left to play in the regular season.
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text className="font-sfregular text-[#DC9F12] text-[10px]">
                  College Basketball
                </Text>
                <View className="w-[1px] h-1 bg-[#707070]"></View>
                <Text className="font-sfregular text-[#F25C54]  text-[10px]">
                  5 hours ago
                </Text>
              </View>
            </View>
          </View>
          <View className="font-sfregular text-[13px] flex flex-row">
            <View className="w-[5px] h-[5px] bg-[#1493FF] rounded-full mt-2"></View>
            <View className="flex flex-col  ml-2">
              <Text className="font-sfregular text-[13px]">
                Leonard will miss Clippers’ road trip; knee still bothering him
                NBA.
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text className="font-sfregular text-[#DC9F12] text-[10px]">
                  NBA
                </Text>
                <View className="w-[1px] h-1 bg-[#707070]"></View>
                <Text className="font-sfregular text-[#F25C54]  text-[10px]">
                  5 hours ago
                </Text>
              </View>
            </View>
          </View>
          <View className="font-sfregular text-[13px] flex flex-row">
            <View className="w-[5px] h-[5px] bg-[#1493FF] rounded-full mt-2"></View>
            <View className="flex flex-col  ml-2">
              <Text className="font-sfregular text-[13px]">
                Premier League committed to 3pm blackout for at next three
                years.
              </Text>
              <View className="flex flex-row items-center gap-x-1">
                <Text className="font-sfregular text-[#DC9F12] text-[10px]">
                  EPL
                </Text>
                <View className="w-[1px] h-1 bg-[#707070]"></View>
                <Text className="font-sfregular text-[#F25C54]  text-[10px]">
                  2 hours ago
                </Text>
              </View>
            </View>
          </View>
          <Text className="font-sfregular text-[#707070] mt-2">
            For <Text className="font-pcuregular text-[#005BE7]">you</Text>
          </Text>
          {/* custom component */}
          <View className="mt-2">
            <Image
              source={images.HomeImg1}
              className="w-full h-[210px] rounded-lg my-1"
              resizeMode="cover"
            />
            <View>
              <View className="flex flex-row items-center gap-x-1">
                <UpArrowSvg />
                <Text className="font-sfsemibold text-[#b2b2b2] text-[13px]">
                  Lorem Ipsum
                </Text>
              </View>
              <View>
                <Text className="font-sfbold text-[13px] leading-2">
                  Lorem Ipsum is simply dummy tex.
                </Text>
                <Text className="text-[#7a7a7a] font-sfregular leading-[18px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <Text className="font-sfregular text-[#FF6B6B] text-[13px]">
                  4 hours ago
                </Text>
              </View>
            </View>
          </View>
          {/* remove this */}
          <View className="mt-2">
            <Image
              source={images.HomeImg2}
              className="w-full h-[210px] rounded-lg my-1"
              resizeMode="cover"
            />
            <View>
              <View className="flex flex-row items-center gap-x-1">
                <UpArrowSvg />
                <Text className="font-sfsemibold text-[#b2b2b2] text-[13px]">
                  Lorem Ipsum
                </Text>
              </View>
              <View>
                <Text className="font-sfbold text-[13px] leading-2">
                  Lorem Ipsum is simply dummy tex.
                </Text>
                <Text className="text-[#7a7a7a] font-sfregular leading-[18px]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
                <Text className="font-sfregular text-[#FF6B6B] text-[13px]">
                  2 hours ago
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </StatusBarComponent>
  );
};

export default Trends;
