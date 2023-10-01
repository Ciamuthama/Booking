import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-gray flex justify-center align-middle mt-6 ">
      <Text className="m-1 text-center">welcome to Kenya Airways </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeNavigation");
        }}
        className="p-3 m-2 bg-orange-300 rounded-full text-white"
      >
        <Text className="text-black text-center">Let's get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
