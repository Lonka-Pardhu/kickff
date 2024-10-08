import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import StatusBarComponent from "../../../components/customStatusBar";
import Feather from "@expo/vector-icons/Feather";
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { getSports, setSportOrder } from "../../../services/ApiCalls";
import { useAuth } from "../../../context/AuthContext";
import { SvgUri, SvgXml } from "react-native-svg";
import Spinner from "react-native-loading-spinner-overlay";

const sportsOrder = () => {
  const { userToken } = useAuth();
  const [sportsOrderData, setSportsOrderData] = useState([]); // Use sports as initial data
  const [isLoading, setIsLoading] = useState(false);
  const [activeDragItem, setActiveDragItem] = useState(null); // Use sports as initial data
  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);
    const fetchSportsOrder = async () => {
      try {
        const sportsOrderRes = await getSports(userToken);
        if (sportsOrderRes && sportsOrderRes?.status === 200) {
          // console.log(sportsOrderRes.data.sports);
          setSportsOrderData(sportsOrderRes.data.sports);
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 401) {
          Alert.alert("Something went wrong!🧐", "Please login.", [
            {
              text: "Ok",
              onPress: () => router.replace("/sign-in"),
            },
          ]);
        }
        console.log(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSportsOrder();
  }, []);

  const renderItem = ({ item, drag, isActive }) => {
    const [svgData, setSvgData] = useState(null);

    useEffect(() => {
      const fetchSvgData = async () => {
        try {
          const response = await fetch(item.category.icon);
          const svgText = await response.text();
          setSvgData(svgText);
        } catch (error) {
          console.log("Error fetching SVG:", error);
        }
      };

      fetchSvgData();
    }, [item.category.icon]);

    return (
      <ScaleDecorator key={item.category_id}>
        <TouchableOpacity
          onLongPress={() => {
            drag();
            setActiveDragItem(item.category.id); // Set the currently active item
          }}
          disabled={isActive}
          className={`${
            activeDragItem === item.category.id ? "bg-[#1493FF]" : "bg-white"
          } h-[65px] w-full rounded-md flex flex-row justify-between items-center border-b-[#EBEBEC] border-b-[1px]`}
        >
          <View className="flex flex-row gap-x-3 items-center">
            <View className="bg-[#E4E4E7] p-2 rounded-xl relative">
              {svgData && (
                <SvgXml
                  xml={svgData}
                  fill={
                    activeDragItem === item.category.id ? "#000" : "#1493FF"
                  }
                  width="24"
                  height="24"
                />
              )}
            </View>
            <Text
              className={`font-sfsemibold text-[16px]  ${
                activeDragItem === item.category.id
                  ? "text-white"
                  : "text-black"
              } text-center `}
            >
              {item.category.name}
            </Text>
          </View>
          <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };

  const handleSetSportOrder = async (newOrder) => {
    const formData = new FormData();
    newOrder.forEach((item, index) => {
      formData.append(`sports_ids[${index}]`, item.category.id.toString());
    });

    try {
      setIsLoading(true);
      const response = await setSportOrder(formData, userToken);
      if (response.status === 200) {
        Alert.alert("Success", "sports order updated successfully!", [
          {
            text: "Ok",
            onPress: () => router.replace("/account"),
          },
        ]);
      } else {
        Alert.alert("Error", "Failed to update sports order.");
      }
    } catch (error) {
      console.error("Error updating sports order:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Spinner visible={isLoading} />
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBarComponent barStyle="dark-content" barBackgroundColor="white">
          <View className="w-full flex flex-row items-center justify-between border-b-[0.5px] border-[#0000004D]">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row items-center p-2"
            >
              <Feather name="chevron-left" size={24} color="black" />
              <Text className="font-sfsemibold text-[15px]">Back</Text>
            </TouchableOpacity>
            <View className="absolute left-0 right-0 flex items-center">
              <Text className="font-sfsemibold text-[17px]">Sports order</Text>
            </View>
          </View>
          <View>
            <Text className="font-sfregular text-[17px] px-24 py-2 text-center">
              Change sports preference in the menu.
            </Text>
          </View>
          {sportsOrderData && (
            <View className="w-full px-4 flex-1 flex justify-center items-center">
              <DraggableFlatList
                showsVerticalScrollIndicator={false}
                data={sportsOrderData}
                onDragEnd={({ data }) => {
                  setSportsOrderData(data);
                  handleSetSportOrder(data);
                  setActiveDragItem(null);
                }}
                keyExtractor={(item) => item.category.id.toString()}
                renderItem={renderItem}
              />
            </View>
          )}
        </StatusBarComponent>
      </GestureHandlerRootView>
    </>
  );
};

export default sportsOrder;
