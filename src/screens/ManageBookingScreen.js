import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Circle from "../../assets/svgs/circle.svg";
import Barcode from "../components/Barcode";

export default function ManageBookingScreen() {
  const navigator = useNavigation();

  return (
    <SafeAreaView>
      <TouchableOpacity
        className="bg-neutral-200 p-2 mx-3 my-3 w-[70px] rounded-xl shadow-sm shadow-black"
        onPress={() => navigator.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>
      <View className="flex mx-3 mt-2 rounded-xl bg-neutral-200 shadow-md">
        <View>
          <Image
            source={require("../../assets/image/kq2.png")}
            style={{ width: wp(94.6), height: hp(40) }}
            className="rounded-t-xl"
          />
        </View>
        <LinearGradient
          colors={["transparent", "rgb(229,229,229)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ width: wp(94.6), height: hp(40) }}
          className="absolute  z-10 rounded-t-xl"
        />
        <View className="flex flex-row justify-between mx-14">
          <View className="z-10 absolute bottom-3 right-[146px] items-center">
            <Entypo name="aircraft-take-off" size={24} color="black" />
          </View>
          <View className="absolute left-12 top-5">
            <Circle width="5em" />
          </View>
          <View className="absolute right-12 top-5">
            <Circle width="5em" />
          </View>
          <View className="flex ">
            <Text className="text-2xl font-semibold">NRB</Text>
            <Text className="font-medium">Nairobi</Text>
          </View>
          <View className="border-b-2 border-dashed border-neutral-500 w-2/3 -top-4 mx-4 "></View>
          <View className="flex">
            <Text className="text-2xl font-semibold">KIS</Text>
            <Text className="font-medium">Kisumu</Text>
          </View>
        </View>
        <View className="border-b-2 border-neutral-600 py-5 my-4 mx-4 "></View>
        <View className="flex flex-row justify-around items-center flex-wrap mx-9 ">
          <View className="flex w-1/2 p-5">
            <Text className="text-black/60 text-lg font-bold">Date & time</Text>
            <Text className="text-black text-lg  font-semibold">date</Text>
          </View>
          <View className="flex items-end w-1/2 p-5">
            <Text className="text-black/60 text-lg font-bold">
              Flight Number
            </Text>
            <Text className="text-black text-lg font-semibold">date</Text>
          </View>
          <View className="flex  w-1/2 p-5">
            <Text className="text-black/60 text-lg font-bold">
              Ticket price
            </Text>
            <Text className="text-black text-lg font-semibold">date</Text>
          </View>
          <View className="flex items-end w-1/2 p-5">
            <Text className="text-black/60 text-lg font-bold">Class</Text>
            <Text className="text-black text-lg font-semibold">date</Text>
          </View>
        </View>

        <View className="items-center border-t-[2px] border-dashed border-neutral-400 p-3">
          <View className="w-6 h-6 rounded-full bg-neutral-100 absolute -top-[13px] -left-[13px]"></View>
          <View className="w-6 h-6 rounded-full bg-neutral-100 absolute -top-[13px] -right-[13px]"></View>
          <Text className="text-black font-bold text-base">Boarding pass</Text>

          <Barcode
            value="    "
            options={{
              format: "CODE128",
              background: "rgba(255,255,255,0.1)",
              height: wp(10),
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
