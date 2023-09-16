import { View, TextInput, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import QuickTabs from "../components/QuickTabs";
import List from "../constants/List";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-transparent">
      <View showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: "#ED1C24" }}>
          <Image
            source={require("../../assets/image/kq3.jpg")}
            style={{
              height: wp(80),
              width: wp(100),
              borderBottomRightRadius: 190,
              borderBottomLeftRadius: 20,
            }}
            className="shadow-black  shadow-2xl "
          />
        </View>
        <View className="mx-6  -mt-12 shadow-black shadow-2xl">
          <View
            className="flex-row items-center  p-4 space-x-2"
            style={{
              borderTopRightRadius: 24,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 8,
              backgroundColor: "rgba(126,126,126,1)",
            }}
          >
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={"black"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider  text-white"
            />
          </View>
        </View>
        <View>
          <QuickTabs />
        </View>
        <View>
          <List />
        </View>
      </View>
    </View>
  );
}
