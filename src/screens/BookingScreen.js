import { Text,View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{ useState } from 'react'
import MultiCity from '../components/MultiCity'
import OneWayTrip from '../components/OneWayTrip'
import RoundTrip from '../components/RoundTrip'

export default function BookingScreen() {
  const [activeComponent, setActiveComponent] = useState('RoundedTrip') 
  const isActive = activeComponent
  const setActive = isActive ? "bg-[#01684A]" : " bg-neutral-100"
  
  const renderComponent = (Trip) => {
    switch (Trip) {
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
        <TouchableOpacity className={`w-[140px]  p-4 rounded-xl ${setActive}`} onPress={() => (setActiveComponent('RoundTrip'))}>
          <Text className='text-[#4b4746] text-center font-semibold text-base'>Round Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className={`w-[140px] p-4 rounded-xl ${setActive}`} onPress={()=>(setActiveComponent('OneWayTrip'))} >
          <Text className='text-[#4b4746] text-center font-semibold text-base'>OneWay Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity  className={`w-[140px] p-4 rounded-xl ${setActive}`} onPress={()=>(setActiveComponent('MultiCity'))} >
          <Text className='text-[#4b4746] text-center font-semibold text-base'>MultiCity Trip</Text>
        </TouchableOpacity>
      </View>

       {renderComponent(activeComponent)}
    </SafeAreaView>
  )
}