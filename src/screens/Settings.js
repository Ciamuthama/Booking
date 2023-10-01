import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Settings() {
  return (
    <SafeAreaView>
      <Text
        className="text-white text-base font-medium"
        style={{ marginBottom: wp(16) }}
      >
        Settings
      </Text>
      <View>
        <TouchableOpacity
          className="rounded border border-neutral-400"
          style={{ height: wp(48) }}
        >
          <Text className="text-zinc-400 text-base font-light leading-7">
            Change Theme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded border border-neutral-400"
          style={{ height: wp(48) }}
        >
          <Text className="text-zinc-400 text-base font-light leading-7">
            Change Language
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="rounded border border-neutral-400"
          style={{ height: wp(48) }}
        >
          <Text className="text-zinc-400 text-base font-light leading-7">
            Sync With Google Calender
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
