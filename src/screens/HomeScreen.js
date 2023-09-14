import { View, Text, ScrollView, TextInput, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons';
import Home from "../components/home";

export default function HomeScreen() {
 

  return (
    <View className="flex-1 bg-neutral-100">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: "#ED1C24",borderBottomRightRadius:0}}>
          <Image source={require('../../assets/image/kq3.jpg')} style={{height: wp(90), width:wp(100), borderBottomRightRadius:190}}  className='shadow-black  shadow-2xl '/>
        </View>
        <View className="mx-6  -mt-10 shadow-black shadow-2xl">
          <View
            className="flex-row items-center shadow-inner p-4 space-x-2  pl-6"
            style={{
              borderTopRightRadius: 24,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 8,
              backgroundColor:'rgba(126,126,126,0.8)',
            }}
          >
            <Ionicons name="search" size={24} color="black" />
            <TextInput
              placeholder="Search Destination"
              placeholderTextColor={'black'}
              className="flex-1 text-base mb-1 pl-1 tracking-wider  text-white"
            />
          </View>
        </View>
        <View>
          <Home/>
        </View>
      </ScrollView>
    </View>
  );
}
