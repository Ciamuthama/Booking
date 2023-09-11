import { View, Text, ScrollView, TextInput, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
 

  return (
    <View className="flex flex-1 bg-white">
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          
          <Image source={require('../../assets/image/smarter-banner.png')} style={{height: wp(90), width:wp(100)}} />
        </View>

        <View className="mx-6 shadow-black shadow-md -mt-10">
          <View
            className="flex-row items-center  p-4 space-x-2 pl-6"
            style={{
              borderTopRightRadius: 24,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 8,
              backgroundColor:'rgba(255,255,255,0.8)',
            }}
          >
            
            <MaterialCommunityIcons name="airplane-search" size={24} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={'black'}
              className="flex-1 text-base mb-1 pl-1 tracking-wider text-white"
            />
          </View>
        </View>
       
      </ScrollView>
    
    </View>
  );
}
