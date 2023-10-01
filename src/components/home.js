import "react-native-gesture-handler";
import { Image, Pressable, Text, View } from "react-native";
import React, { useCallback, useRef } from "react";
import { BottomSheetModal, BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSvg from "../../assets/svgs/Image.svg";
import BestPriceSvg from "../constants/BestPrice";

export default function Home({ title, image, desc }) {
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const snapPoints = ["60%", "90%"];

  const renderBackdrop = useCallback((props) => (
    <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />
  ));

  return (
    <View className="mx-2">
      <Pressable
        className="w-[250px] h-80 p-2 bg-slate-300 rounded-lg relative"
        onPress={handlePresentModalPress}
      >
        <View>
          <Image
            source={{ uri: image }}
            className="w-full h-[220px] bg-stone-300 rounded-lg "
            width={wp(40)}
            height={hp(36)}
            resizeMethod="auto"
          />
        </View>
        <Text
          className=" text-white text-xl font-medium"
          style={{ fontSize: wp(3) }}
        >
          {title}
        </Text>
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
      >
        <View>
          <View className="items-end">
            <BestPriceSvg />
          </View>
          <View className="rounded-t-xl">
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.6)"]}
              start={{ x: 1.5, y: 0.25 }}
              end={{ x: 0, y: 0.75 }}
              style={{ width: wp(100), height: hp(40) }}
              className="absolute  z-10 rounded-t-xl"
            />
            <Image
              source={{ uri: image }}
              className="rounded-t-xl"
              style={{ width: wp(100), height: hp(40) }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text classText="font-semibold">{desc}</Text>
          </View>
        </View>
      </BottomSheetModal>
    </View>
  );
}
