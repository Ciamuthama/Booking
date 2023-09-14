import { Image, Pressable, ScrollView, Text,View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import QuickTabs from './QuickTabs'

export default function Home() {
const imageUrl= 'https://drscdn.500px.org/photo/241157549/q%3D80_m%3D1000/v2?sig=83315a1fc8f34237ec2f924c1f1d34eb308f8958c3764b449092bf37db4bb477'

  return (
    <ScrollView className='space-x-2'>
      <View>
          <QuickTabs />
      </View>
      <View>
       
        <Pressable className='bg-slate-200 mt-5 rounded-2xl mr-2 shadow-2xl'>
          <Image source={{uri:imageUrl}} className='rounded-2xl relative ' style={{width:wp(50),height:wp(40)}}  />
          <Text className='absolute bottom-1 w-20 rounded-2xl text-center'>name</Text>
        </Pressable>
      </View>    
    </ScrollView>
  )
}