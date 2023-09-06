import { StatusBar } from "expo-status-bar";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { storeColors } from "./theme";
import { categories } from "./constants";
import { useState } from "react";
import GradientButton from "./components/GradientButton";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, 0.4)", "rgba(9,181,211, 0.4)"]}
      className="w-full flex-1"
    >
      <SafeAreaView>
        <View className="container"></View>
      </SafeAreaView>
    </LinearGradient>
  );
}
