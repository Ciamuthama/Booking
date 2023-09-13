import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import BookingScreen from "../screens/BookingScreen.js";
import TripScreen from "../screens/TripScreen";
import CheckInScreen from "../screens/CheckInScreen.js";

const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('screen')

function HomeNavigation() {
  return (
    <View style={{width,height}}>
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor:'black',
          tabBarLabelStyle: { fontSize: 15, fontWeight: '600', textAlignVertical:'center' },
        tabBarLabelPosition:'beside-icon',
        tabBarVisibilityAnimationConfig: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle: {
          position: "absolute",
          bottom: 70,
          left: 40,
          right: 40,
          height: 70,
          borderTopWidth: 0,
          elevation:1,
          backgroundColor: "#ED1C24",
          borderTopRightRadius: 24,
          borderTopLeftRadius: 8,
          borderBottomLeftRadius:24,
          borderBottomRightRadius:8
        },
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View className="flex justify-center ">
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
            <View className="flex justify-center align-middle">
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
        name="Profile"
        options={{
          headerShown: false,
         
          tabBarIcon: ({ focused }) => (
            <View className='flex justify-center align-middle'>
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
      </View>
  );
}

export default HomeNavigation;
