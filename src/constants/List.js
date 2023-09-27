import { FlatList, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Data } from "./ExploreData";
import Home from "../components/home";

export default function List() {
  return (
    <View>
      <Text className="text-black text-lg font-semibold leading-snug  ml-3 mb-[16px] mt-2" style={{ fontSize: wp(4) }}>
      Popular Places
      </Text>
      <FlatList
        data={Data}
        renderItem={({ item }) => <Home {...item} />}
        keyExtractor={(Data) => Data.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
