import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from 'react-native-modal';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home({ title, image }) {
const [open,setOpen] = useState(false)

  return (
    <View className="mx-2">
      <Pressable className="bg-slate-300 mt-5 p-2 rounded-2xl shadow-2xl relative" onPress={()=> setOpen(true)}>
        <Text
          className=" absolute z-20 top-4 right-3 p-2 bg-red-600 rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm  text-white"
          style={{ fontSize: wp(3) }}
        >
          {title}
        </Text>
        <Image
          source={{ uri: image }}
          className="rounded-xl"
          style={{ width: wp(40), height: hp(36) }}
          resizeMethod="scale"
        />
      </Pressable>
      <Modal isVisible={open}>
      <MaterialCommunityIcons name='close-circle' size={24} color='black' onPress={() => setOpen(false)} />
      </Modal>
    </View>
  );
}
