import { Image, Pressable, ScrollView, Text,View,FlatList } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import QuickTabs from './QuickTabs'
import { Data } from '../constants/ExproleData';

export default function Home() {

  return (
    <ScrollView className='space-x-2'>
      <View>
          <QuickTabs />
      </View>
      <FlatList>
       {
          Data.map((key, index) => (
         
        <Pressable key={index} className='bg-slate-200 mt-5 rounded-2xl mr-2 shadow-2xl'>
          <Image source={{uri:key.image}} className='rounded-2xl relative ' style={{width:wp(50),height:wp(40)}}  />
              <Text className='absolute bottom-1 w-20 rounded-2xl text-center'>{ key.title}</Text>
        </Pressable>
            
       ))
       }
      </FlatList>    
    </ScrollView>
  )
}