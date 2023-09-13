import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modal';
import React, { useState } from 'react'
import Checkin from '../constants/Checkin';
import FlightSchedule from '../constants/FlightSchedule';
import FlightStatus from '../constants/FlightStatus';
import ManageBookings from '../constants/ManageBookings';





export default function QuickTabs() {


  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className='space-x-2 mt-10'>
        <View className='flex-row justify-center'>
          <Checkin />
          <FlightSchedule />
          <FlightStatus />
          <ManageBookings/>

       </View>
      </ScrollView>
    </View>
  )
}