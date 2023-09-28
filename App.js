import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
import Navigation from "./src/navigation/navigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
      <Navigation />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
