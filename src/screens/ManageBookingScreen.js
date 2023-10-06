import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import Barcode from 'react-barcode';

export default function ManageBookingScreen() {
  return (
    <SafeAreaView>
      
      <View className='flex mx-3 mt-2 rounded-xl bg-neutral-200 shadow-md'>
        <View>
          <Image source={require('../../assets/image/kq2.png')} style={{width:wp(94.6),height:hp(50)}} className='rounded-t-xl' />
        </View>
        <LinearGradient
              colors={["transparent", "rgb(229,229,229)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ width: wp(94.6), height: hp(50) }}
              className="absolute  z-10 rounded-t-xl"
            />
        <View className='flex flex-row justify-around items-center flex-wrap mx-10 '>
      <View className='flex w-1/2 p-5'>
      <Text className='text-black/60 text-lg font-bold'>Date & time</Text>
      <Text className='text-black text-lg  font-semibold'>date</Text>
      </View>
      <View className='flex items-end w-1/2 p-5'>
      <Text className='text-black/60 text-lg font-bold'>Flight Number</Text>
      <Text className='text-black text-lg font-semibold'>date</Text>
      </View>
      <View className='flex  w-1/2 p-5'>
      <Text className='text-black/60 text-lg font-bold'>Ticket price</Text>
      <Text className='text-black text-lg font-semibold'>date</Text>
      </View>
      <View className='flex items-end w-1/2 p-5'>
      <Text className='text-black/60 text-lg font-bold'>Class</Text>
      <Text className='text-black text-lg font-semibold'>date</Text>
      </View></View>

      <View className='items-center border-t-[1px] border-dashed p-2'>
        <View className='w-6 h-6 rounded-full bg-neutral-100 relative -top-5 -left-[219px]'></View>
        <View className='w-6 h-6 rounded-full bg-neutral-100 relative -top-11 -right-[219px]'></View>
          <Text className='text-black font-bold text-xl'>Boarding pass</Text>
         
      </View>
      </View>
   </SafeAreaView>
  )
}