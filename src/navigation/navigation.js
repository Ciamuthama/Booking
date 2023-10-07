import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeNavigation from "./HomeNavigation";
import CheckInScreen from "../screens/CheckInScreen";
import FlightStatusScreen from "../screens/FlightStatusScreen";
import FlightScheduleScreen from "../screens/FlightScheduleScreen";
import ManageBookingScreen from "../screens/ManageBookingScreen";
import BookingScreen from "../screens/BookingScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ManageBooking" component={ManageBookingScreen} />
        <Stack.Screen
          name="HomeNavigation"
          options={{ headerShown: false }}
          component={HomeNavigation}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} />
        <Stack.Screen name="FlightStatus" component={FlightStatusScreen} />
        <Stack.Screen name="FlightSchedule" component={FlightScheduleScreen} />
        
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
