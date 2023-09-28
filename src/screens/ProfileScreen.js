import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSvg from "../../assets/svgs/Image.svg";

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex flex-1 justify-center align-middle bg-white">
      <View className="w-full justify-center items-center">
        <Text className="text-black font-bold" style={{ marginBottom: wp(19) }}>
          Profile
        </Text>
        <View
          className="flex items-center justify-center  bg-stone-400 rounded-2xl relative"
          style={{ marginBottom: wp(10), width: wp(85), height: wp(85) }}
        >
          <ImageSvg width={wp(30)} height={wp(30)} className="align-middle" />
        </View>
        <Text className="text-center text-black font-bold">John Doe</Text>
      </View>

      <View>
        <Text
          className="text-black font-medium"
          style={{ marginBottom: wp(16) }}
        >
          Setting
        </Text>
        <TouchableOpacity className='h-12 rounded border border-neutral-400'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
            App Settings
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          className="text-black font-medium"
          style={{ marginBottom: wp(16) }}
        >
          Account
        </Text>
        <TouchableOpacity className='h-12 rounded border border-neutral-400'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
          Change account name
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='h-12 rounded border border-neutral-400'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
          Change account password
          </Text>
        </TouchableOpacity>
      
        <TouchableOpacity className='h-12 rounded border border-neutral-400'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
            My Trip
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='h-12 rounded border border-neutral-400"'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
          FAQ
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='h-12 rounded border border-neutral-400"'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
          Help & Feedback
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className='h-12 rounded border border-neutral-400"'>
          <Text className="p-1 py-2 text-left text-zinc-400 font-light">
          Share App
          </Text>
        </TouchableOpacity>
      </View>

      <View>
      <TouchableOpacity className='h-12"'>
          <Text className="text-red-500 text-base font-light leading-7">
          Sign Out
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}
