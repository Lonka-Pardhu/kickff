import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getSports } from "../services/ApiCalls";
import Spinner from "react-native-loading-spinner-overlay";
import { SvgXml } from "react-native-svg";

const SportsCategory = () => {
  const { userToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [sports, setSports] = useState([]);
  const [activeSport, setActiveSport] = useState("  ");

  useEffect(() => {
    setIsLoading(true);
    const fetchSports = async () => {
      try {
        const sportsRes = await getSports(userToken);
        if (sportsRes && sportsRes?.status === 200) {
          const formattedSports = await Promise.all(
            sportsRes.data.sports.map(async (sport) => {
              const response = await fetch(sport.category.icon); // Fetch the SVG
              const svgText = await response.text(); // Get the SVG as text
              return {
                ...sport,
                category: {
                  ...sport.category,
                  icon: svgText, // Store the SVG text
                },
              };
            })
          );
          setSports(formattedSports);
          if (formattedSports.length > 0) {
            setActiveSport(formattedSports[0].category.name);
          }
        }
      } catch (error) {
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
    fetchSports();
  }, []);

  return (
    <>
      <Spinner visible={isLoading} />
      <View className="pl-4 py-1">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "flex-start",
            gap: 10,
            paddingVertical: 6,
          }}
          horizontal
        >
          {sports?.map((sport, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setActiveSport(sport.category.name)} // Adjusted to access category name
              className="flex flex-col items-center justify-center"
            >
              <View className="bg-[#E4E4E7] p-2 rounded-xl relative">
                <SvgXml
                  xml={sport.category.icon} // Use the fetched SVG text
                  fill={
                    activeSport === sport.category.name ? "#1493FF" : "#979797"
                  }
                  width="35"
                  height="35"
                />
              </View>
              <Text className="font-sfregular text-[10px] text-[#102856] tracking-wide text-center">
                {sport.category.name} {/* Adjusted to display category name */}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default SportsCategory;
