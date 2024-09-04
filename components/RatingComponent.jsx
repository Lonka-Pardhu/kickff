import { View, Text } from "react-native";

const RatingComponent = ({ rating }) => {
  const dotColors = [
    "#F9140A", // Color for rating 1
    "#DF6438", // Color for rating 2
    "#F7AD31", // Color for rating 3
    "#49AE11", // Color for rating 4
    "#064AC1", // Color for rating 5
  ];

  return (
    <View className="flex flex-row items-center gap-x-[2px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <View
          key={index}
          className="h-[7px] w-1 rounded-full"
          style={{
            backgroundColor: index < rating ? dotColors[rating - 1] : "#979797",
          }}
        />
      ))}
    </View>
  );
};

export default RatingComponent;
