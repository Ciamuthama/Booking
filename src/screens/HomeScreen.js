import { View, Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import React from 'react'


export default function HomeScreen() {
  return (
    <SafeAreaView className='flex flex-1 justify-center align-middle bg-white'>
      <Text className='text-center'>HomeScreen</Text>
     
    </SafeAreaView>
  )
}