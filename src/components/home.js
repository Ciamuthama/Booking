import "react-native-gesture-handler";
import { Image, Pressable, Text, View } from "react-native";
import React, { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Home({ title, image, }) {
  const bottomSheetModalRef = useRef(null);
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };

  const snapPoints = ["35%","50%","90%"];

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
        <Image
          source={{ uri: image }}
          className="rounded-xl"
          style={{ width: wp(40), height: hp(36) }}
          resizeMethod="scale"
        />
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
      >
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheetModal>
    </View>
  );
}
