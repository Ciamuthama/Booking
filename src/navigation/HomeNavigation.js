import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingScreen from "../screens/BookingScreen.js";
import TripScreen from "../screens/TripScreen";
import CheckInScreen from "../screens/CheckInScreen.js";

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:'black',
        tabBarLabelStyle:{fontSize:15, fontWeight:'600',},
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 10,
          right: 10,
          justifyContent: "center",
          alignItem: "center",
          flex: 1,
          paddingBottom: 15,
          height: 90,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "gray",
          borderRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center -mb-5">
              <Ionicons
                name={focused ? "md-home-sharp" : "md-home-outline"}
                size={24}
                color="black"
                
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
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center align-middle -mb-5">
              <Ionicons
                name={focused ? "airplane-sharp" : "airplane-outline"}
                size={24}
                color="black"
              />
            </View>
          ),
        }}
        component={BookingScreen}
      />
      <Tab.Screen
        name="Trips"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center align-middle -mb-5">
              <Ionicons
                name={focused ? "ios-briefcase-sharp" : "ios-briefcase-outline"}
                size={24}
                color="black"
              />
             
            </View>
          ),
        }}
        component={TripScreen}
      />
       <Tab.Screen
        name="Check In"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center align-middle -mb-5">
              <Ionicons
                name={focused ? "bus" : "bus-outline"}
                size={24}
                color="black"
              />
            </View>
          ),
        }}
        component={CheckInScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
         
          tabBarIcon: ({ focused }) => (
            <View className='flex justify-center align-middle -mb-5'>
              <Ionicons
                name={focused ? "md-person" : "md-person-outline"}
                size={24}
                color="black"
                
              />
             
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
