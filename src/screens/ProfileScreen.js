import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ImageSvg from "../../assets/svgs/image.svg";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="fleX flex-1 justify-center align-middle bg-white px-3">
        <Text className="text-black font-bold text-2xl" style={{ marginBottom: wp(2) }}>
          Profile
        </Text> 
      <View className="w-full justify-center items-center">
        <View
          className="flex items-center justify-center bg-neutral-500 rounded-2xl relative shadow-sm shadow-black"
          style={{ width: wp(30), height: wp(30) }}
        >
          <Text>Avatar</Text>
          <ImageSvg width={wp(10)} height={wp(10)} className="align-middle" /> 
        </View>
        <Text className="text-center text-black font-bold text-xl p-2">John Doe</Text>
      </View>

      <View>
        <Text
          className="mb-2 text-black font-medium text-base"
        >
          Setting
        </Text>
        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            App Settings
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>
      </View>

      <View className='gap-2 mt-3 mb-3'>
        <Text
          className=" text-black font-medium text-base"
        >
          Account
        </Text>
        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            Change account name
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            Change account password
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800'>
          <Text className="p-4  text-left text-black font-light text-base">
            My Trip
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            FAQ
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            Help & Feedback
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>

        <TouchableOpacity className='flex flex-row items-center justify-between rounded border border-neutral-800 pr-1'>
          <Text className="p-4  text-left text-black font-light text-base">
            Share App
          </Text>
          <Ionicons name='ios-chevron-forward' size={18} color='black' />
        </TouchableOpacity>
      </View>

      <View className='mt-1'>
        <TouchableOpacity className='flex-row py-3 items-center gap-1'>
          <Feather name='log-out' size={24} color='#BB0000'/>
          <Text className="text-[#BB0000] text-base font-bold leading-7">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
