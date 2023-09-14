import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CheckInScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text>CheckInScreen</Text>
        <Text>Flight Number</Text>
        <Text>departure and arrival airports</Text>
        <Text>arrival time and date</Text>
        <Text> gate info</Text>
        <Text>seat selection/change/edit</Text>
        <Text>Check In Status</Text>
      </View>
    </SafeAreaView>
  )
}
