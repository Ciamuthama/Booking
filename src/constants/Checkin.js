import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Checkin() {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        className="flex space-y-2 mx-2 rounded-xl bg-neutral-400 p-5 px-6 "
        onPress={() => setOpen(true)}
      >
        <Text className="text-neutral-900 font-medium ">Check In</Text>
        <Modal isVisible={open}>
          <View
            className="bg-white w-full h-1/4"
            style={{
              borderTopRightRadius: 24,
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 8,
            }}
          >
            <View className="flex items-end m-2">
              <MaterialCommunityIcons
                name="close-circle"
                size={24}
                color="black"
                onPress={() => setOpen(false)}
              />
            </View>
            <TouchableOpacity
              className="flex items-center space-y-2 mx-2 bg-orange-500 p-4 rounded-lg"
              onPress={() => navigation.navigate("CheckIn")}
            >
              <Text className="text-neutral-900 font-medium">Check In</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
}
