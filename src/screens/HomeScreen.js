import { View, TextInput, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import ImageSvg from "../../assets/svgs/Image.svg";
import RectSvg from "../../assets/svgs/rectangle.svg";
import List from "../constants/List";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 mt-6 bg-transparent">
      <View showsVerticalScrollIndicator={false}>
        <View className="w-full items-end justify-end">
          <View
            style={{
              marginBottom: wp(30),
              marginTop: wp(30),
              width: wp(50),
              height: wp(50),
            }}
            className="flex items-center justify-center bg-stone-400 rounded-2xl relative"
          >
            <ImageSvg className="align-middle" />
          </View>
        </View>

        <View className="mx-2 shadow-black shadow-2xl">
          <View className="flex-row items-center p-4 space-x-2 bg-neutral-400 rounded-xl">
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search Flight"
              placeholderTextColor={"black"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider  text-white"
            />
          </View>
        </View>
        <View className="flex w-full">
          <Text className="text-black text-lg font-semibold">
            Upcoming Flights
          </Text>
          <View className="items-center">
            <RectSvg width="500px" height="250px" />
          </View>
        </View>
        <View>
          <List />
        </View>
      </View>
    </SafeAreaView>
  );
}
