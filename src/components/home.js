import { ScrollView, Text } from 'react-native'
import React from 'react'
import QuickTabs from './QuickTabs'

export default function Home() {
  return (
    <ScrollView className='space-x-2'>
      <QuickTabs />
    <Text className='font-bold'>Explore</Text>
    </ScrollView>
  )
}