import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import UpArrowSvg from "../../assets/svg/UpArrowIcon";
import images from "../../constants/images";
import StatusBarComponent from "../../components/customStatusBar";
import SportsCategory from "../../components/SportsCategory";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const NUM_ITEMS = 10;

const initialData = [...Array(NUM_ITEMS)].map((d, index) => {
  return {
    key: `item-${index}`,
    label: String(index) + "",
  };
});

const livescore = () => {
  const [data, setData] = useState(initialData);

  const renderItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          className={`${
            isActive ? "bg-red-600" : "bg-black"
          } h-[100px] w-full p-3 rounded-md my-1`}
        >
          <Text className="font-sfbold text-white text-center">
            {item.label}
          </Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
        <ScrollView className="flex-1 bg-white">
          <View className="border-b-[0.5px] border-[#0000004D] p-3">
            <Text className="text-[16px] text-center font-sfsemibold">
              Live Score
            </Text>
          </View>
          <View className="p-3">
            <SportsCategory />
          </View>
        </ScrollView>
        <View className="w-full">
          <DraggableFlatList
            data={data}
            onDragEnd={({ data }) => {
              console.log(data);
              setData(data);
            }}
            keyExtractor={(item) => item.key}
            renderItem={renderItem}
          />
        </View>
      </StatusBarComponent>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  rowItem: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default livescore;
