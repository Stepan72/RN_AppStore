import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { storeColors } from "../theme";
import StarRating from "react-native-star-rating";

interface GameCardProps {
  id: number;
  title: string;
  image: ImageSourcePropType;
  downloads: string;
  stars: number;
}

export default function GameCard({
  id,
  title,
  image,
  downloads,
  stars,
}: GameCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <View className="mr-4 relative" key={id}>
      <Image source={image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        className="absolute p-4 w-full h-full flex justify-between rounded-3xl"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255, 0.3)" }}
            onPress={() => {
              setIsFavourite((prevValue) => !prevValue);
            }}
          >
            <AntDesign
              name="heart"
              size={25}
              color={isFavourite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>
        <View className="space-y-1">
          <StarRating
            disabled={true}
            starSize={15}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={stars}
            emptyStar={require("../assets/images/emptyStar.png")}
            fullStar={require("../assets/images/fullStar.png")}
          />
          <Text className="text-xl font-bold text-gray-300">{title}</Text>
          <View className="flex-row items-center space-x-2">
            <Feather name="download" size={18} color="white" />
            <Text className="text-sm text-gray-300 font-semibold">
              {downloads} downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
