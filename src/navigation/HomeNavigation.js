import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingScreen from "../screens/BookingScreen.js";

const Tab = createBottomTabNavigator();

//const { width, height } = Dimensions.get("screen");

function HomeNavigation() {
  return (
    <BottomSheetModalProvider>

    
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
          textAlignVertical: "center",
        },
        tabBarLabelPosition: "beside-icon",
        tabBarVisibilityAnimationConfig: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          //position: "absolute",
          //bottom: 70,
          //left: 40,
          //right: 40,
          height: 60,
          borderTopWidth: 0,
          elevation: 1,
          backgroundColor: "#ED1C24",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className="flex justify-center ">
              <Ionicons
                name={focused ? "md-home-sharp" : "md-home-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Book Flight"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View className="flex justify-center align-middle -rotate-45">
              <Ionicons
                name={focused ? "airplane-sharp" : "airplane-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
        component={BookingScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => (
            <View className="flex justify-center align-middle">
              <Ionicons
                name={focused ? "md-person" : "md-person-outline"}
                size={size}
                color={color}
              />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
    </BottomSheetModalProvider>
  );
}

export default HomeNavigation;
