import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigation';

export default function App() {
  return (
    <SafeAreaView className='flex-1 bg-white'>

      <Navigation/>
    </SafeAreaView>
  );
}


