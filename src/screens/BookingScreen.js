import { Text,View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React,{ useState } from 'react'
import MultiCity from '../components/MultiCity'
import OneWayTrip from '../components/OneWayTrip'
import RoundTrip from '../components/RoundTrip'

export default function BookingScreen() {
  const [activeComponent, setActiveComponent] = useState('RoundedTrip') 
  
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
    <SafeAreaView className='flex '>
      
      <View className='flex-row justify-between my-6 mx-2'>
        <TouchableOpacity className='w-[140px]  bg-green-400 p-4 rounded-xl' onPress={() => (setActiveComponent('RoundTrip'))}>
          <Text className='text-black text-center font-semibold text-base'>Round Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className='w-[140px]  bg-green-400 p-4 rounded-xl' onPress={()=>(setActiveComponent('OneWayTrip'))} >
          <Text className='text-black text-center font-semibold text-base'>OneWay Trip</Text>
         </TouchableOpacity>

         <TouchableOpacity className='w-[140px]  bg-green-400 p-4 rounded-xl' onPress={()=>(setActiveComponent('MultiCity'))} >
          <Text className='text-black text-center font-semibold text-base'>MultiCity Trip</Text>
        </TouchableOpacity>
      </View>

       {renderComponent(activeComponent)}
    </SafeAreaView>
  )
}