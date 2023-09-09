import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <View className='bg-gray flex justify-center align-middle mt-4 '>
          <Text className='m-1 text-center'>welcome</Text>
          <TouchableOpacity  onPress={()=>{navigation.navigate('HomeNavigation')}} className='p-3 m-2 bg-orange-300 rounded-full text-white'> 
        <Text className='text-black text-center'>Click Me</Text>
      </TouchableOpacity>
    </View>
  )
}