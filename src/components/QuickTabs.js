import { View, ScrollView } from "react-native";
import React from "react";
import Checkin from "../constants/Checkin";
import FlightSchedule from "../constants/FlightSchedule";
import FlightStatus from "../constants/FlightStatus";
import ManageBookings from "../constants/ManageBookings";

export default function QuickTabs() {
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        className="space-x-2 py-3 my-2"
      >
        <View className="flex-row items-center justify-center shadow-2xl ">
          <Checkin />
          <FlightSchedule />
          <FlightStatus />
          <ManageBookings />
        </View>
      </ScrollView>
    </View>
  );
}
