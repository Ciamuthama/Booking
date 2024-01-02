import { View, TextInput, Text,TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import ImageSvg from "../../assets/svgs/image.svg";
import Logo from '../../assets/svgs/logo.svg'
import List from "../constants/List";

export default function HomeScreen() {
  const navigator = useNavigation()

  return (
    <SafeAreaView className="flex-1 mt-2 bg-neutral-200">
      <View showsVerticalScrollIndicator={false}>
        <TouchableOpacity className="w-full items-end justify-end" onPress={()=>navigator.navigate('ProfileScreen')}>
        <View
          className="flex items-center justify-center mb-2 mx-2 bg-neutral-400/60 rounded-xl relative shadow-sm shadow-black"
          style={{ width: wp(10), height: wp(10) }}
        >
            {/* <ImageSvg className="align-middle" /> */}
          </View>
        </TouchableOpacity>

        <View className="mx-2 shadow-black shadow-2xl">
          <View className="flex-row items-center p-4 space-x-2 bg-neutral-400/60 rounded-xl shadow-inner shadow-black">
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search Flight"
              placeholderTextColor={"black"}
              className="flex-1 text-base mb-1 pl-1 tracking-wider text-white"
            />
          </View>
        </View>
        <View className="flex w-full mx-2 my-4">
          <Text className="ml-1 my-2 text-black text-lg font-semibold">
            Upcoming Flights
          </Text>
          <TouchableOpacity className="w-[445px] h-[250px] relative bg-neutral-400/60 rounded-bl-3xl rounded-br-xl rounded-tr-3xl rounded-tl-xl ">
           <View className='z-10 bg-neutral-200 w-[20px] h-[20px] rounded-full absolute bottom-[50px] -left-[12px] '></View>
            <View className='relative border-b-[2px] border-dashed border-neutral-200 top-[189px] w-full'></View>
          <View className='bg-neutral-200 w-[20px] h-[20px] rounded-full absolute bottom-[50px] -right-[12px] '></View>
            <View className='flex flex-row -bottom-48 justify-between items-center mx-3'>
              <Text>Logo here</Text>
              <Text className='text-xl font-bold'>$5000</Text>
          </View>
          </ TouchableOpacity>
        </View>
        <View>
          <List />
        </View>
      </View>
    </SafeAreaView>
  );
}
