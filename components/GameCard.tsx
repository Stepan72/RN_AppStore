import { View, Text } from "react-native";
import React from "react";

interface GameCardProps {
  id: number;
  title: string;
  image: string;
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
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
