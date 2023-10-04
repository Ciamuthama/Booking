import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ManageBookingScreen() {
  return (
    <View className="flex-1 h-[590px] mx-3 rounded-xl bg-red-100">
    <View className='flex flex-wrap w-full justify-between border-t-sm mx-2'>
    <View>
      <Text>Date & time</Text>
      <Text>date</Text>
      </View>
      <View>
      <Text>Flight Number</Text>
      <Text>date</Text>
      </View>
      <View>
      <Text>Ticket price</Text>
      <Text>date</Text>
      </View>
      <View>
      <Text>Class</Text>
      <Text>date</Text>
      </View>
      </View>

      <View>
        <Text>Boarding pass</Text>
      </View>
   </View>
  )
}