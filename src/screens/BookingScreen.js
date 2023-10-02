import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import MultiCity from '../components/MultiCity'
import OneWayTrip from '../components/OneWayTrip'
import RoundTrip from '../components/RoundTrip'

export default function BookingScreen() {
 
  return (
    <SafeAreaView className='bg-white flex-1 flex-column justify-center gap-3 mt-6 '>
         <TouchableOpacity className='bg-orange-300' onPress={()=>(<RoundTrip/>)}>
          <Text className='text-black'>Round Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className='bg-orange-300' onPress={()=>(<OneWayTrip/>)}>
          <Text className='text-black'>OneWay Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className='bg-orange-300' onPress={()=>(<MultiCity/>)}>
          <Text className='text-black'>MultiCity Trip</Text>
         </TouchableOpacity>
    </SafeAreaView>
  )
}