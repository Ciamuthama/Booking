import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TripScreen from "../screens/TripScreen";

const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 10,
          right: 10,
          justifyContent: "center",
          alignItem: "center",
          flex: 1,
          paddingBottom: 5,
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
            <View className="flex justify-center  bg-orange-300 p-3">
              <Ionicons
                name={focused ? "md-home-sharp" : "md-home-outline"}
                size={28}
                color="black"
                className="justify-center flex align-middle w-full"
              />
              <Text className="font-bold text-center">Home</Text>
            </View>
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Trips"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center align-middle">
              <Ionicons
                name={focused ? "ios-briefcase-sharp" : "ios-briefcase-outline"}
                size={28}
                color="black"
              />
              <Text>My Trips</Text>
            </View>
          ),
        }}
        component={TripScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                name={focused ? "md-person" : "md-person-outline"}
                size={28}
                color="black"
              />
              <Text>Profile</Text>
            </View>
          ),
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default HomeNavigation;
