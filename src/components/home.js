import "react-native-gesture-handler";
import { Image, Pressable, Text, View } from "react-native";
import React, { useCallback, useRef } from "react";
import { BottomSheetModal, BottomSheetBackdrop} from "@gorhom/bottom-sheet";
import {LinearGradient} from'expo-linear-gradient'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import BestPriceSvg from "../constants/BestPrice";

export default function Home({ title, image, desc }) {
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const snapPoints = ["60%", "90%"];
  
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    )
  ) 

 
return (
    <View className="mx-2">
      <Pressable
        className="bg-slate-300 mt-5 p-2 rounded-2xl shadow-2xl relative"
        onPress={handlePresentModalPress}
      >
        <Text
          className=" absolute z-20 top-4 right-3 p-2 bg-red-600 rounded-bl-xl rounded-tr-xl rounded-tl-sm rounded-br-sm  text-white"
          style={{ fontSize: wp(3) }}
        >
          {title}
        </Text>
      <View >
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.3)']}
            start={[0.5,0]} end={[0.5, 1]}
            style={{ width: wp(40), height: hp(35)}}
            className='absolute bottom-0 z-10 rounded-xl'
          />
        <Image
          source={{ uri: image }}
          className="rounded-xl relative "
          width={wp(40)}
          height={hp(36)}
          resizeMethod='auto'
          
          />
        </View>
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
      <View>
        <View className='items-end'>
      <BestPriceSvg/>
        </View>
        <View className='rounded-t-xl'>
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            start={{x: 1.5, y: 0.25}} end={{x: 0, y: 0.75}}
            style={{ width: wp(100), height: hp(40)}}
            className='absolute  z-10 rounded-t-xl'
          />
        <Image
          source={{ uri: image }}
          className="rounded-t-xl"
          style={{ width: wp(100), height: hp(40),}}
          resizeMode='cover'
        />
        </View>
        <View>
          <Text classText='font-semibold'>{desc }</Text>
        </View>
        </View>
      </BottomSheetModal>
    </View>
  );
}
