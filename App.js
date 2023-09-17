import {GestureHandlerRootView} from 'react-native-gesture-handler'

import React from 'react';
import Navigation from './src/navigation/navigation';


export default function App() {
  return (
    <GestureHandlerRootView style={{flex:1}}>

  <Navigation/>
    </GestureHandlerRootView>
  );
}


