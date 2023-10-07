import { Text,View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'

import MultiCity from '../components/MultiCity'
import OneWayTrip from '../components/OneWayTrip'
import RoundTrip from '../components/RoundTrip'

export default function BookingScreen() {
  // const [activeComponent, setActiveComponent] = useState('RoundedTrip') 
  const [isActive, setIsActive] = useState('RoundTrip') 

  const handleActive = (Id) => {
    setIsActive(Id)
  }

  
  
  const renderComponent = () => {
    switch (isActive) {
      case 'RoundTrip':
        return <RoundTrip />;
      
      case 'OneWayTrip':
        return <OneWayTrip/>

      case 'MultiCity':
        return <MultiCity/>
       
    
      default:
        return <RoundTrip/>;
    }
  }
 


  return (
    <SafeAreaView className='flex'>
      
      <View className='flex-row justify-between my-6 mx-2'>
        <TouchableOpacity  className={`w-[8.75rem] p-4 rounded-xl ${ isActive == 'RoundTrip' ?  "bg-[#01684A]" : " bg-neutral-200" }`} onPress={() => (handleActive('RoundTrip'))}>
          <Text className={`text-white text-center font-semibold text-base ${ isActive == 'RoundTrip' ?  "text-white" : " text-black" }`}>Round Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className={`w-[8.75rem] p-4 rounded-xl ${ isActive == 'OneWayTrip' ?  "bg-[#01684A]" : " bg-neutral-200" }`} onPress={()=>(handleActive('OneWayTrip'))} >
          <Text className={`text-white text-center font-semibold text-base ${ isActive == 'OneWayTrip' ?  "text-white" : " text-black" }`}>OneWay Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className={`w-[8.75rem] p-4 rounded-xl ${isActive == 'MultiCity' ?  "bg-[#01684A]" : " bg-neutral-200" }`} onPress={()=>(handleActive('MultiCity'))} >
          <Text className={`text-white text-center font-semibold text-base ${ isActive == 'MultiCity' ?  "text-white" : " text-black" }`}>MultiCity Trip</Text>
        </TouchableOpacity>
      </View>

       {renderComponent()}
    </SafeAreaView>
  )
}