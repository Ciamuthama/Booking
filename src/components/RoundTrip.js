
import React from "react";
import {  View,TouchableOpacity,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SelectList } from 'react-native-dropdown-select-list'



export default function RoundTrip() {
const navigation = useNavigation()
const [selected, setSelected] = React.useState("");
  
const data = [
    {key:'1', value:'Mobiles'},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers'},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]

  return (
    <View className='flex items-center mx-2 h-[700px]  bg-neutral-200 rounded-2xl'>
       <Text>Where To</Text>
        <SelectList 
        setSelected={(val) => setSelected(val)} 
        onSelect={()=> selected}
        data={data}
        search={false}
        save="value"
        placeholder='Select Airport'
        inputStyles={{ backgroundColor: '#F4F4F4', width: 340,padding:20 }}
        boxStyles={{  borderRadius: 0, borderWidth: 0, borderBottomWidth: 2,backgroundColor: '#F4F4F4'}}
        dropdownStyles={{zIndex:10,position:'absolute', top:35, width: 300 ,backgroundColor:'#F4F4F4', borderRadius: 0, borderWidth: 0,}}
    />

      <TouchableOpacity className='w-[215.50px] p-5 mt-4 bg-green-400 rounded-lg' onPress={()=> navigation.navigate('ManageBooking')} >
        <Text className='text-center text-black'>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
