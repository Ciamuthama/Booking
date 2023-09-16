import { FlatList, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Data } from "./ExproleData";
import Home from "../components/home";

export default function List() {
  return (
    <View>
      <Text className="font-bold ml-3 top-2" style={{ fontSize: wp(4) }}>
        Popular Destinations
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
