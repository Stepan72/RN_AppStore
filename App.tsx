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
        <View className="container">
          {/* upp buttons */}
          <View className="flex-row justify-between items-center px-4">
            <Octicons name="three-bars" size={30} color={storeColors.text} />
            <FontAwesome name="bell" size={30} color={storeColors.text} />
          </View>
          {/* categories */}
          <View className="mt-3 space-y-3">
            <Text
              style={{ color: storeColors.text }}
              className="ml-4 font-bold text-3xl"
            >
              Browse Games
            </Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((cat, index) => {
                  if (cat === activeCategory) {
                    ///show gradient category
                    return (
                      <GradientButton
                        containerClass="mr-2"
                        value={cat}
                        key={cat}
                      />
                    );
                  } else {
                    /// show normal category
                    return (
                      <TouchableOpacity
                        key={cat}
                        className="bg-blue-200 p-3 px-4 rounded-full mr-2"
                        onPress={() => {
                          setActiveCategory(cat);
                        }}
                      >
                        <Text>{cat}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
          {/* featured row */}
          <View></View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
