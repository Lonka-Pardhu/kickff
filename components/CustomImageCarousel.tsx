// import { images } from "@/constants";
import { Dimensions, Text, View, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { FC } from "react";
import images from "@/constants/images";
interface CarouselProps {
  width: number;
  height: number;
}

const CustomImageCarousel: FC<CarouselProps> = ({ width, height }) => {
  const carouselData = [{ image: images.HomeImg1 }, { image: images.HomeImg2 }];

  return (
    <View style={{ width, height }}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={carouselData}
        scrollAnimationDuration={2000}
        renderItem={({ item }) => (
          <View style={{ width, height }} className="p-3 bg-white">
            <Image
              source={item.image}
              resizeMode="cover"
              className="w-full h-full rounded-sm"
            />
          </View>
        )}
      />
    </View>
  );
};

export default CustomImageCarousel;
