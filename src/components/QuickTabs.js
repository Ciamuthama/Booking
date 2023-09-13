import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function QuickTabs() {
    const navigation = useNavigation()

  return (
    <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className='space-x-2 mt-10'>
              
              <View className='flex-row justify-center'>
                  <TouchableOpacity className='flex items-center space-y-2 mx-2 bg-orange-500 p-10' onPress={()=> navigation.navigate('CheckIn')}>
                      <Text className='text-neutral-900 font-medium'>Check In</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className='flex items-center space-y-2 mx-2  bg-orange-500 p-10' onPress={()=>navigation.navigate('FlightStatus')}>
                      <Text className='text-neutral-900 font-medium'>Flight Status</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className='flex items-center space-y-2 mx-2  bg-orange-500 p-10'>
                      <Text className='text-neutral-900 font-medium'>Flight Schedule</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className='flex items-center space-y-2 mx-2  bg-orange-500 p-10'>
                      <Text className='text-neutral-900 font-medium'>Experiences</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className='flex items-center space-y-2 mx-2  bg-orange-500 p-10'>
                      <Text className='text-neutral-900 font-medium'>Content 5</Text>
                  </TouchableOpacity>
              </View>
      </ScrollView>
    </View>
  )
}